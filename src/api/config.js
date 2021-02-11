import axios from "axios";

export default axios.create({
  baseURL: "http://174.138.103.162:4000/",
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST,GET,PUT,DELETE",
    "Access-Control-Allow-Headers": "Authorization, Lang",
  },
});
