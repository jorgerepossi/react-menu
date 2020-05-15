import React from "react";
import { Outlet } from "react-router-dom";

export const Admin = () => {
  return (
    <div>
      <p> Now showing post </p> <Outlet />
     
    </div>
  );
};
