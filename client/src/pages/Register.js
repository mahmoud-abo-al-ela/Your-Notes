import { useState, useEffect } from "react";
import { Logo, FormRow, Alert, NavBar } from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";
import { useAppContext } from "../context/appContext";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const initialState = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
  phone: "",
  birthdate: "",
  isMember: false,
  isSignUp: false,
};

const Register = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState(initialState);
  const { user, isLoading, showAlert, displayAlert, setupUser } =
    useAppContext();
  const { t } = useTranslation();

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };
  const toggleSign = () => {
    setValues({ ...values, isSignUp: !values.isSignUp });
  };

  const inputHandler = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  // eslint-disable-next-line no-unused-vars
  let missingFields = false;

  const submitFirstPage = () => {
    const { email, password, confirmPassword } = values;

    if (!email || !password || !confirmPassword) {
      missingFields = true;
      displayAlert(t("Register.values"));
      return;
    }

    setValues({ ...values, isSignUp: true });
  };

  const submitSecondPage = () => {
    const { username, phone, birthdate } = values;

    if (!username || !phone || !birthdate) {
      missingFields = true;
      displayAlert(t("Register.values"));
      return;
    }

    const currentUser = {
      email: values.email,
      password: values.password,
      confirmPassword: values.confirmPassword,
      username,
      phone,
      birthdate,
    };

    setupUser({
      currentUser,
      endPoint: "register",
      alertText: t("Register.success"),
    });
  };

  const submitLogin = (e) => {
    e.preventDefault();
    const { email, password } = values;

    if (!email || !password) {
      missingFields = true;
      displayAlert(t("Register.values"));
      return;
    }

    const currentUser = {
      email,
      password,
    };

    setupUser({
      currentUser,
      endPoint: "login",
      alertText: t("Register.success"),
    });
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [user, navigate]);

  return (
    <>
      <Wrapper className="register">
        <div className="light_layer">
          <NavBar className="nav" />
          <form className="form">
            <Logo className="cover" />
            <div className="inputs">
              <h1>
                {values.isMember ? t("Register.login") : t("Register.signup")}
              </h1>
              {showAlert && <Alert />}
              {values.isMember && (
                <>
                  <FormRow
                    type="email"
                    name="email"
                    value={values.email}
                    inputHandler={inputHandler}
                  />
                  <FormRow
                    type="password"
                    name="password"
                    value={values.password}
                    inputHandler={inputHandler}
                  />
                  <button
                    type="submit"
                    className="btn btn-block"
                    disabled={isLoading}
                    onClick={submitLogin}
                  >
                    <h5>{t("Register.login")}</h5>
                  </button>
                  <p>
                    {t("Register.donthave")}{" "}
                    <button
                      type="button"
                      className="member-btn"
                      onClick={toggleMember}
                    >
                      {t("Register.signup")}
                    </button>
                  </p>
                </>
              )}

              {!values.isMember && !values.isSignUp && (
                <>
                  <FormRow
                    type="email"
                    name="email"
                    value={values.email}
                    inputHandler={inputHandler}
                  />
                  <FormRow
                    type="password"
                    name="password"
                    value={values.password}
                    inputHandler={inputHandler}
                  />
                  <FormRow
                    type="password"
                    name="confirmPassword"
                    value={values.confirmPassword}
                    inputHandler={inputHandler}
                  />
                  <button
                    type="button"
                    className="btn btn-block"
                    disabled={isLoading}
                    onClick={submitFirstPage}
                  >
                    <h5>{t("Register.complete")}</h5>
                  </button>

                  <p>
                    {t("Register.haveaccount")}{" "}
                    <button
                      type="button"
                      className="member-btn"
                      onClick={toggleMember}
                    >
                      {t("Register.login")}
                    </button>
                  </p>
                </>
              )}

              {values.isSignUp && (
                <>
                  <FormRow
                    type="text"
                    name="username"
                    value={values.username}
                    inputHandler={inputHandler}
                  />
                  <FormRow
                    type="phone"
                    name="phone"
                    value={values.phone}
                    inputHandler={inputHandler}
                  />
                  <FormRow
                    type="date"
                    name="birthdate"
                    value={values.birthdate}
                    inputHandler={inputHandler}
                  />
                  <button
                    type="button"
                    className="btn btn-block"
                    disabled={isLoading}
                    onClick={submitSecondPage}
                  >
                    <h5>{t("Register.signup")}</h5>
                  </button>
                  {values.isSignUp && (
                    <button
                      type="button"
                      className="btn btn-block back"
                      onClick={toggleSign}
                    >
                      <h5>{t("Register.back")}</h5>
                    </button>
                  )}
                  <p>
                    {t("Register.haveaccount")}{" "}
                    <button
                      type="button"
                      className="member-btn"
                      onClick={toggleMember}
                    >
                      {t("Register.login")}
                    </button>
                  </p>
                </>
              )}
            </div>
          </form>
        </div>
      </Wrapper>
    </>
  );
};

export default Register;
