import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/bookingRoutes/auth.js";
import hotelRoute from "./routes/bookingRoutes/hotels.js";
import roomRoute from "./routes/bookingRoutes/rooms.js";
import userRoute from "./routes/bookingRoutes/users.js";
import cookieParser from "cookie-parser";
import cors from "cors";
const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB);
  } catch (err) {
    console.log(err);
  }
};
mongoose.connection.on("connected", () => {
  console.log("Connected to DB");
});
mongoose.connection.on("disconnected", () => {
  console.log("DB is Disconnected");
});

//Middleware
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use("/bookingApi/v1/auth", authRoute);
app.use("/bookingApi/v1/users", userRoute);
app.use("/bookingApi/v1/hotels", hotelRoute);
app.use("/bookingApi/v1/rooms", roomRoute);

app.use((err, req, res, next) => {
  const errStatus = err.status || 500;
  const errMessage = err.message || "Something went wrong";
  console.log(`Error - ${err.status} - ${err.message}`);
  return res
    .status(errStatus)
    .json({ success: false, status: errStatus, message: errMessage });
});
app.listen(8888, () => {
  console.log("Listening on 8888");
  connect();
});

app.get("/", (req, res) => {
  res.send("Server is running.......");
});
