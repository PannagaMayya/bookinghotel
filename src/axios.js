import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8888/bookingApi/v1",
});

export default instance;
