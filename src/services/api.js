import axios from "axios";

const API = axios.create({
  baseURL: "https://radhika-steel-1.onrender.com/api",
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("adminToken"); // ✅ FIXED
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;
