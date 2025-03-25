import API from "./server-connect";

export const getRoles = async () => API.get("v1/common/roles");

export const getGenders = async () => API.get("v1/common/genders");

export const getEventTypes = async () => API.get("v1/common/event-types");

export const getProgramTypes = async () => API.get("v1/common/program-types");
