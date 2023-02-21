import api from "../api/index";

export const fetchCreateUser = async (userData: any) => {
  try {
    const { data } = await api.post("/register", userData);
    return data;
  } catch (error: any) {
    error.message = "error de servidor";
    error.status = 500;
    return error;
  }
};
export const fetchValidateUser = async (userData: any) => {
  try {
    const res = await api.post("/login", userData);
    return res.data;
  } catch (error: any) {
    error.message = "error de servidor";
    error.status = 500;
    return error;
  }
};
