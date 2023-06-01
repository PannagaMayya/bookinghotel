import UserSchema from "../../models/bookingModels/UserSchema.js";

export const getUserById = async (req, res, next) => {
  try {
    const getUser = await UserSchema.findById(req.params.id);
    res.status(200).json(getUser);
  } catch (err) {
    next(err);
  }
};

export const getUsers = async (req, res, next) => {
  try {
    const getUsers = await UserSchema.find();
    res.status(200).json(getUsers);
  } catch (err) {
    next(err);
  }
};
