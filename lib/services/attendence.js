import API from "./server-connect";

export const getAttendance = async (params) => {
  const response = await API.get("v1/attendance/get", { params });
  return response?.data?.data;
};

export const getAttendanceById = async (id) =>
  await API.get(`v1/attendance/get?id=${id}`);

export const markAttendance = async (attendanceData) =>
  await API.post("v1/attendance/create", attendanceData);

export const updateAttendance = async (attendanceData) =>
  await API.put("v1/attendance/update", attendanceData);

export const deleteAttendance = async (id) =>
  await API.delete(`v1/attendance/delete?id=${id}`);
