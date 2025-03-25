import API from "./server-connect";

export const getEvents = async (params) => {
  const response = await API.get("v1/event/get", { params });
  return response?.data?.data;
};

export const getEventById = async (id) =>
  await API.get(`v1/event/get?id=${id}`);

export const createEvent = async (eventData) =>
  await API.post("v1/event/create", eventData);

export const updateEvent = async (eventData) =>
  await API.put("v1/event/update", eventData);

export const publishEvent = async (eventData) =>
  await API.put("v1/event/publish-status-change", eventData);

export const deleteEvent = async (id) =>
  await API.delete(`v1/event/delete?id=${id}`);
