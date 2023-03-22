import HotelSchema from "../models/HotelSchema.js";
export const createHotel = async (req, res, next) => {
  const newHotel = new HotelSchema(req.body);
  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (err) {
    next(err);
  }
};

export const getHotelById = async (req, res, next) => {
  try {
    const getHotel = await HotelSchema.findById(req.params.id);
    res.status(200).json(getHotel);
  } catch (err) {
    next(err);
  }
};

export const getHotels = async (req, res, next) => {
  try {
    const getHotels = await HotelSchema.find();
    res.status(200).json(getHotels);
  } catch (err) {
    next(err);
  }
};
