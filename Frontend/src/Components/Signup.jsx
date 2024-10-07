import React, { useEffect, useState } from "react";
import { Link, redirect, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { userAction } from "../Store/signupSlice";

const Signup = () => {
  const [err, setErr] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onSubmit = async (data) => {
    const userSIgnup = {
      username: data.username,
      email: data.email,
      password: data.password,
    };

    await axios
      .post(`http://localhost:3000/user/signup`, userSIgnup)
      .then((res) => {
        if (res.data) {
          toast.success("Sign up successfully");
          dispatch(userAction.initialUser(userSIgnup));
          navigate("/");
          localStorage.setItem("signupUser", JSON.stringify(res.data.user));
          localStorage.removeItem("LoggedUser");
        }
      })
      .catch((err) => {
        setErr(err.response.data.message);
      });
  };

  return (
    <>
      <div className="w-full min-h-screen flex justify-center items-center flex-col gap-5">
        <div className="text-sm breadcrumbs">
          <ul>
            <li>
              <Link
                to="/"
                className="font-bold hover:text-blue-500 no-underline"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="w-4 h-4 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                  ></path>
                </svg>
                Home
              </Link>
            </li>

            <li>
              <span className="inline-flex gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="w-4 h-4 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  ></path>
                </svg>
                Signup
              </span>
            </li>
          </ul>
        </div>
        <div className="h-1/2 w-1/2 rounded-lg flex justify-center">
          <div className="signup flex flex-col justify-center items-center gap-2 w-full rounded-l-lg h-[50vh] shadow-lg">
            <h1 className="text-white font-extrabold text-5xl">Welcome</h1>
            <p className="text-white font-light mt-5">
              to keep connected with us plase login
            </p>
            <p className="text-white font-light">with your personal info</p>
          </div>

          <div className="flex flex-col justify-center items-center gap-3 w-full rounded-r-lg h-[50vh] bg-[#ededed] shadow-lg">
            <h1 className="text-[#111] font-extrabold text-3xl mb-5">
              Create Account
            </h1>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-3"
            >
              <label className="input input-bordered flex items-center gap-2 mt-4 rounded-lg bg-[#e0dfdf]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input
                  type="text"
                  className="grow"
                  placeholder="Email"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-500">Email must be provided</span>
                )}
              </label>
              <label className="input input-bordered flex items-center gap-2 rounded-lg bg-[#e0dfdf]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
                <input
                  type="text"
                  className="grow"
                  placeholder="Username"
                  {...register("username", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-500">
                    username must be provided
                  </span>
                )}
              </label>
              <label className="input input-bordered flex items-center gap-2 rounded-lg bg-[#e0dfdf]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clipRule="evenodd"
                  />
                </svg>
                <input
                  type="password"
                  className="grow"
                  placeholder="Password"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className="text-red-500">
                    password must be provided
                  </span>
                )}
              </label>
              {err && <p className="text-red-500">{err}</p>}
              <button
                className="signup border-none px-9 py-2 mt-5 rounded-lg text-white font-bold shadow-lg"
                type="submit"
              >
                Sign up
              </button>
              <p className="text-right">
                Do you have an account?{" "}
                <a href="/" className="font-bold text-blue-400 underline">
                  Login
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
