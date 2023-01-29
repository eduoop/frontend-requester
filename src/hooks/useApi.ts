import axios from "axios";
import { api } from "../config/api";

export const useApi = () => ({
  validate: async (token: string) => {
    const response = await api.get("/auth", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  },
  signin: async (email: string, password: string) => {
    const response = await api.post("/auth", { email, password });
    return response.data;
  },
  logout: async () => {
   const response = await api.post("/auth");
    return response.data;
  },
});
