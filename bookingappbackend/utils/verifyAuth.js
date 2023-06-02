import { createError } from "./error.js";
export const verifyAuth = (req, res, next) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.indexOf("Basic ") !== -1
  ) {
    if (req.headers.authorization.split(" ")[1] == process.env.ADMINAUTH) {
      next();
    } else {
      return next(createError(401, "Invalid Authorization"));
    }
  } else {
    return next(createError(401, "Authorization required"));
  }
};

export default verifyAuth;
