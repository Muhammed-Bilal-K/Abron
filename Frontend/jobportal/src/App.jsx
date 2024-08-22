import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Joblist from "./components/Joblist";
import RouteManagment from "./routes/RouteManagment";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Joblist />} />
        <Route path="/*" element={<RouteManagment />} />
      </Routes>
    </>
  );
}

export default App;
