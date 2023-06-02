import express from "express";
import {
  getUserById,
  getUsers,
} from "../../controllers/bookingControllers/userController.js";

import { createError } from "../../utils/error.js";
import { verifyToken, verifyUser } from "../../utils/verifyToken.js";

const router = express.Router();
router.get("/checkAuth", verifyToken, (req, res, next) => {
  res.send("Logged In Successfully");
});
router.get("/checkAuth/:id", verifyUser, (req, res, next) => {
  res.send("Authorized");
});
router.get("/:id", verifyUser, getUserById);

router.get("/", (req, res, next) => {
  next(createError(403, "Unauthorized"));
});
export default router;
