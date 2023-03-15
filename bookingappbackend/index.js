import express from "express";
import dotenv from "dotenv";
const app = express();
dotenv.config();
//process.env.MONGODB
app.listen(8888, () => {
  console.log("Listening on 8888");
});

app.get("/", (req, res) => {
  res.send("Hi");
});
