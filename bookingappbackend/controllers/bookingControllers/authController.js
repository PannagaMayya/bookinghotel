import UserSchema from "../../models/bookingModels/UserSchema.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { createError } from "../../utils/error.js";
export const registerUser = async (req, res, next) => {
  try {
    //salt (radom string) is prepended to the password
    const salt = bcrypt.genSaltSync(10);
    //hash= salt + hashed password
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new UserSchema({
      username: req.body.username,
      email: req.body.email,
      password: hash,
    });
    await newUser.save();
    res.status(200).send("User created successfully");
  } catch (err) {
    next(err);
  }
};

export const loginUser = async (req, res, next) => {
  try {
    const user = await UserSchema.findOne({ username: req.body.username });

    if (!user) return next(createError(404, "User Not found"));
    //Separating salt from DBHash and prepend to requested password and then compare both hashes
    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect)
      return next(createError(400, "Password is incorrect"));
    const token = jwt.sign({ id: user._id }, process.env.JWT);
    //token contains Header (algorithm) + Payload ({id}) + Signature (hashed Header+Payload+SecretKey)
    const { password, isAdmin, ...otherUserDetails } = user._doc;
    //httpOnly prevents reading Cookie from the client side or cross-site scripts, will return null
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(otherUserDetails);
  } catch (err) {
    next(err);
  }
};
