import API from "./server-connect";

export const meApi = async () => API.get("v1/auth/me");

export const userDetails = async (params) =>
  API.get("v1/auth/user", { params });

export const regenerateTokenService = async (params) =>
  API.post("v1/auth/generate-token", params);

export const login = async (params) =>
  API.post("v1/auth/login", params, { withCredentials: true });

export const logout = async (params) => API.post("v1/auth/logout", params);

export const register = async (params) => API.post("v1/auth/register", params);

export const forgetPassword = async (params) =>
  API.post("v1/auth/forgot-password", params);

export const resetPassword = async (params) =>
  API.post("v1/auth/reset-password", params);
