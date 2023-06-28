import { StatusCodes } from "http-status-codes";
const errorHandlerMiddleware = (err, req, res, next) => {
  console.error(err);
  const defaultErrors = {
    statusCodes: err.statusCodes || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || "Something went wrong",
  };
  if (err.name === "ValidationError") {
    defaultErrors.statusCodes = StatusCodes.BAD_REQUEST;
    defaultErrors.msg = Object.values(err.errors)
      .map((item) => item.message)
      .join(",");
  }
  if (err.code && err.code === 11000) {
    defaultErrors.statusCodes = StatusCodes.BAD_REQUEST;
    defaultErrors.msg = `${Object.keys(err.keyValue)} is already exist`;
  }
  res.status(defaultErrors.statusCodes).json({ msg: defaultErrors.msg });
};

export default errorHandlerMiddleware;
