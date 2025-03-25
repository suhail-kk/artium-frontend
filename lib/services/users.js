import API from "./server-connect";

export const getUsers = async () => await API.get("v1/users/get");

export const getUserById = async ({ id }) => {
  const response = await API.get(`/v1/users/get-details?id=${id}`);
  return response?.data?.data?.data;
};
