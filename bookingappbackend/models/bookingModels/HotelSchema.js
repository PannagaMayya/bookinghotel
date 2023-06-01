import mongoose from "mongoose";
const { Schema } = mongoose;
const HotelSchema = new Schema({
  id: { type: String, required: true },
  title: { type: String, required: true },
  location: { type: String, required: true },
  taggedCity: { type: String, required: true },
  km: { type: String, required: true },
  price: { type: Number, required: true },
  rating: { type: Number, required: true, min: 0, max: 10 },
  descriptionheading: { type: String, required: true },
  description: { type: String, required: true },
  descriptionGreenheading: { type: String },
  descriptionGreen: { type: String },
  imglink: { type: String, required: true },
  rooms: {
    type: [
      {
        roomType: String,
        roomFeatures: [String],
        roomDescription: String,
        roomDoubleAvailable: Number,
        roomDoubleCost: Number,
        roomSingleAvailable: Number,
        roomSingleCost: Number,
      },
    ],
    required: true,
  },
});

export default mongoose.model("HotelScehma", HotelSchema);
