import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import hotelRoute from "./routes/hotels.js";
import roomRoute from "./routes/rooms.js";
import userRoute from "./routes/users.js";
import cookieParser from "cookie-parser";
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
app.use(cookieParser());
app.use(express.json());
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/hotels", hotelRoute);
app.use("/api/v1/rooms", roomRoute);

app.use((err, req, res, next) => {
  console.log("Error");
  const errStatus = err.status || 500;
  const errMessage = err.message || "Something went wrong";
  return res
    .status(errStatus)
    .json({ success: false, status: errStatus, message: errMessage });
});
app.listen(8888, () => {
  console.log("Listening on 8888");
  connect();
});

app.get("/", (req, res) => {
  res.send("Hi");
});
