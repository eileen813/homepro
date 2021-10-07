import api from "./apiConfig";

export const getAllProjects = async () => {
  const resp = await api.get("/projects");
  return resp.data;
};
