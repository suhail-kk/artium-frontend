import API from "./server-connect";

export const getInvigilators = async (params) => {
  const response = await API.get("v1/invigilator/get", { params });
  return response?.data?.data;
};

export const getFaculties = async (params) => {
  const response = await API.get("v1/invigilator/faculties-not-invited", {
    params,
  });
  return response?.data?.data;
};

export const getInvigilatorById = async (id) =>
  await API.get(`v1/invigilator/get-details?id=${id}`);

export const sendInvitation = async (invigilatorData) =>
  await API.post("v1/invigilator/invite-invigilator", invigilatorData);

export const acceptInvitation = async (invigilatorData) =>
  await API.post("v1/invigilator/request-status-change", invigilatorData);

export const updateEventStatus = async (invigilatorData) =>
  await API.put("v1/invigilator/event-status-change", invigilatorData);

export const getInvigilator = async (params) => {
  const response = await API.get("v1/invigilator/get", { params });
  return response?.data;
};
