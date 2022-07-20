import axios from "axios";

// const baseURL = "http://localhost:1323";
const baseURL = "https://namelessshop-service.azurewebsites.net";

export default axios.create({
    baseURL: baseURL,
    headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
      }
})