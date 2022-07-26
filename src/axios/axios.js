import axios from "axios";

const baseURL = "https://namelessshop-server.azurewebsites.net";

export default axios.create({
    baseURL: baseURL,
    headers: {
        'Access-Control-Allow-Origin': baseURL + ":1323", 
        "Content-Type": "application/json",
        'Access-Control-Allow-Methods': "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token' 
      }
})