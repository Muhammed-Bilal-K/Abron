import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import CreateJobForm from "../components/CreateJobForm";
import JobDetail from "../components/JobDetails";
import AdminTable from "../components/AdminTable";
import ProductRoute from "./ProtectRoute/ProductRoute";

const RouteManagment = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/create-job" element={<CreateJobForm />} />
      <Route path="/jobs/:jobId" element={<JobDetail />} />
      <Route element={<ProductRoute />}>
        <Route path="/dashboard" element={<AdminTable />} />
      </Route>
    </Routes>
  );
};

export default RouteManagment;
