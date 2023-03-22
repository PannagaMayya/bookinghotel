import express from "express";
import {
  createHotel,
  getHotelById,
  getHotels,
} from "../controllers/hotelController.js";

import { createError } from "../utils/error.js";

const router = express.Router();

router.post("/", createHotel);

router.get("/:id", getHotelById);

router.get("/", getHotels);
export default router;
