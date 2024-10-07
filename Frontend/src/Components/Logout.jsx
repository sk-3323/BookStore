import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { userAction } from "../Store/signupSlice";
import toast from "react-hot-toast";
const Logout = () => {
  const dispatch = useDispatch();

  const btnLogout = () => {
    dispatch(userAction.logoutUser());
    localStorage.removeItem("User");
    toast.success("logout successfully...");
  };

  return (
    <Link
      className="btn border-none btn-outline bg-red-500 btn-sm px-5 rounded-full"
      onClick={btnLogout}
    >
      Logout
    </Link>
  );
};

export default Logout;
