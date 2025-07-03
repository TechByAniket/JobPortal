import axios from "axios";

const API = axios.create({
    baseURL : "http://localhost:5000/api",
    timeout : 5000,
})

// const API = axios.create({
//     baseURL : "https://api.joinrise.io/api",
//     timeout : 5000,
// })

export default API;