import express from "express";
import {
  createHotel,
  getHotelById,
  getHotels,
  getHotelsByCity,
} from "../../controllers/bookingControllers/hotelController.js";

import { verifyAuth } from "../../utils/verifyAuth.js";

const router = express.Router();

router.post("/", verifyAuth, createHotel);
router.get("/getHotelsByCity", getHotelsByCity);
router.get("/:id", getHotelById);

router.get("/", getHotels);
export default router;
