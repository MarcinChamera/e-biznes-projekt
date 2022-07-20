import axios from "axios";

// const baseURL = "http://localhost:1323";
const baseURL = "https://namelessshop-server.azurewebsites.net";

export default axios.create({
    baseURL: baseURL,
    headers: {
        // 'Access-Control-Allow-Origin': baseURL,
        'Access-Control-Allow-Origin': baseURL + ":1323",
        "Content-Type": "application/json",
        // 'Access-Control-Allow-Methods': "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      }
})