import axios from "axios";
import authService from "@/lib/services/auth";

const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_ENDPOINT,
  timeout: 100000,
  headers: {
    "content-Type": "application/json",
  },
});

API.interceptors.request.use(
  async (config) => {
    const newConfig = { ...config }; // Create a new object to avoid modifying the original config
    newConfig.headers = {
      ...newConfig.headers,
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      Accept: "application/json",
    };
    return newConfig; // Return the new config object
  },
  (error) => {
    console.log("====================================");
    console.log("⚠️ Server connection error ->", error);
    console.log("====================================");
  }
);

API.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 498 && !originalRequest._retry) {
      originalRequest._retry = true;
      const currentRefreshToken = localStorage.getItem("refreshToken");
      const params = { refreshToken: currentRefreshToken };
      const res = await authService.regenerateTokenService(params);
      const { refreshToken, jwtToken } = res.data?.data || {};
      localStorage.setItem("refreshToken", refreshToken);
      localStorage.setItem("accessToken", jwtToken);
      return API(originalRequest);
    }
    return Promise.reject(error);
  }
);

export default API;
