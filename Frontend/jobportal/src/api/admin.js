import { Api } from "../services/Api";

export const login = async (creadits) => {
    try {
        const res = await Api.post("/api/v2/admin/login",{ ...creadits },{ withCredentials: true });
        return res.data;
    } catch (err) {
        console.log(err);

        throw err;
    }
};

export const jobCreate = async (details) => {
    try {
        const res = await Api.post("/api/v2/admin/jobs",{ ...details },{ withCredentials: true });
        return res.data;
    } catch (err) {
        console.log(err);

        throw err;
    }
};

export const getJobs = async () => {
    try {
      const res = await Api.get("/api/v2/admin/jobs");
  
      return res.data;
    } catch (error) {
      console.error("Error creating company details:", error);
      throw new Error("Error creating company details:");
    }
};

export const getAllUsers = async () => {
    try {
      const res = await Api.get("/api/v2/admin/applicants");
  
      return res.data;
    } catch (error) {
      console.error("Error creating company details:", error);
      throw new Error("Error creating company details:");
    }
};

export const getJobById = async (id) => {
    try {
      const res = await Api.get(`/api/v2/admin/jobs/${id}`);
  
      return res.data;
    } catch (error) {
      console.error("Error creating company details:", error);
      throw new Error("Error creating company details:");
    }
};

export const applyToJob = async (details) => {
    try {
      const res = await Api.post("/api/v1/apply",{ ...details });
      
      return res.data;
    } catch (error) {
      console.error("Error creating company details:", error);
      throw new Error("Error creating company details:");
    }
};