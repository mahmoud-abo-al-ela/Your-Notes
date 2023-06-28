import User from "../models/User.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, unAuthenticatedError } from "../errors/index.js";
import i18next from "../i18n.js";

const register = async (req, res) => {
  const { username, email, password, confirmPassword, phone, birthdate } =
    req.body;

  if (
    !username ||
    !email ||
    !password ||
    !confirmPassword ||
    !phone ||
    !birthdate
  ) {
    throw new BadRequestError(i18next.t("Register:values"));
  }
  if (password !== confirmPassword) {
    throw new BadRequestError(i18next.t("Register:notmatch"));
  }
  const user = await User.create({
    username,
    email,
    password,
    phone,
    birthdate,
  });
  const token = user.createJWT();
  res.status(StatusCodes.CREATED).json({
    user: {
      username: user.username,
      email: user.email,
      phone: user.phone,
      birthdate: user.birthdate,
    },
    token,
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError(i18next.t("Register:values"));
  }
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    throw new BadRequestError(i18next.t("Register:notemail"));
  }
  const checkPassword = await user.comparePassword(password);
  if (!checkPassword) {
    throw new unAuthenticatedError(i18next.t("Register:notpassword"));
  }
  const token = user.createJWT();
  user.password = undefined;
  res.status(StatusCodes.OK).json({ user, token });
};

const updateUser = async (req, res) => {
  try {
    const { username, email, password, phone, birthdate } = req.body;
    if (!email || !username || !password || !phone || !birthdate) {
      throw new BadRequestError(i18next.t("Register:values"));
    }

    const user = await User.findOne({ _id: req.user.userId });

    user.username = username;
    user.email = email;
    user.password = password;
    user.phone = phone;
    user.birthdate = birthdate;

    await user.save();

    const token = user.createJWT();
    res.status(StatusCodes.OK).json({ user, token });
  } catch (error) {
    console.error(error);
    if (!res.headersSent) {
      res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ error: "An error occurred" });
    }
  }
};

export { register, login, updateUser };
