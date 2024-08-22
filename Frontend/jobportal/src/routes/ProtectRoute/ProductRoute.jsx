import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProductRoute = () => {
  const token = localStorage.getItem("AdminToken");
  console.log(token,'fdfdfd');
  
  return <div>{token ?  <Outlet /> : <Navigate to='/login' />}</div>;
};

export default ProductRoute;