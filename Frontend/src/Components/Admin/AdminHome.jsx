import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
const AdminHome = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Navbar />
          <div className="flex-1 p-4 bg-gray-100">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminHome;
