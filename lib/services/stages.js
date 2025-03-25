import API from "./server-connect";

// Fetch all stages
export const getStages = async (params) => {
  const response = await API.get("v1/stage/get", { params });
  return response?.data?.data;
};

// Fetch a single stage by ID
export const getStageById = async (id) =>
  await API.get(`v1/stage/get?id=${id}`);

// Create a new stage
export const createStage = async (stageData) =>
  await API.post("v1/stage/create", stageData);

// Update an existing stage by ID
export const updateStage = async (stageData) =>
  await API.put("v1/stage/update", stageData);

// Delete a stage by ID
export const deleteStage = async (id) =>
  await API.delete(`v1/stage/delete?id=${id}`);

export const getStage = async (params) => {
  const response = await API.get("v1/stage/get", { params });
  return response?.data;
};
