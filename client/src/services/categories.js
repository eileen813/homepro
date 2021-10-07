import api from "./apiConfig";

export const getAllCategories = async () => {
  const resp = await api.get("/categories");
  return resp.data;
};
