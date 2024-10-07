import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logout from "../Logout";
import { useDispatch } from "react-redux";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const btnLogout = () => {
    navigate("/");
    dispatch(userAction.logoutUser());
    localStorage.removeItem("User");
    toast.success("logout successfully...");
  };
  return (
    <div className="w-64 h-screen bg-gray-800 text-white flex flex-col sticky top-0 left-0">
      <div className="p-4 text-2xl font-bold">Admin Panel</div>
      <nav className="flex-1">
        <ul>
          <li className="p-4 hover:bg-gray-700">
            <Link to="/admin">Dashboard</Link>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <Link to="/admin/add-book">Add Book</Link>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <Link to="/admin/books">Display All Books</Link>
          </li>
        </ul>
      </nav>
      <div className="p-5 w-full">
        <button
          className="btn hover:bg-red-300 hover:text-zinc-900 border-none btn-outline bg-red-500 px-5 rounded-lg w-full"
          onClick={btnLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
