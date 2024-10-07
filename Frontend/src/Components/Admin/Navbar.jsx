import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-white shadow-md p-4">
      <div className="text-2xl font-bold">Admin Dashboard</div>
      <div className="flex space-x-4 items-center">
        <div className="text-gray-600">Welcome, Admin</div>
        <div className="rounded-full h-10 w-10 bg-gray-400 flex items-center justify-center text-white">
          A
        </div>
      </div>
    </div>
  );
};

export default Navbar;
