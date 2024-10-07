import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import Login from "./Login";
import Logout from "./Logout";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const [theme, setTheme] = useState("cupcake");
  const [stickyscroll, setStickyscroll] = useState(false);

  const loggedUser = useSelector((store) => store.signup.username);

  useEffect(() => {
    // let themeElement = document.body.getAttribute("data-theme");
    if (theme === "dark") {
      document.body.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else if (theme === "cupcake") {
      document.body.setAttribute("data-theme", "cupcake");
      localStorage.setItem("theme", "cupcake");
    }
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setStickyscroll(true);
      } else {
        setStickyscroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [stickyscroll]);

  return (
    <>
      <div
        className={`z-50 bg-[#FAF7F5] mb-9 min-h-11 ${
          stickyscroll ? "drawer sticky top-0" : ""
        }`}
      >
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <div className="w-full navbar ">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="flex-1 px-2 mx-2 w-full justify-between">
              <div className="logo flex justify-center gap-3 items-center">
                <img
                  src="https://cdn.vectorstock.com/i/500p/55/19/book-shop-icon-library-store-or-bookstore-symbol-vector-47565519.jpg"
                  alt=""
                  height={50}
                  width={50}
                />
                <b className="font-['Neue-Montreal'] text-xl">Book Store</b>
              </div>

              <div className="hidden lg:block">
                <ul className="menu menu-horizontal flex justify-between">
                  {/* Navbar menu content here */}
                  <div className="flex justify-center gap-3">
                    <li>
                      <NavLink
                        className="font-semibold text-zinc-800 rounded-full"
                        to="/"
                      >
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="font-semibold text-zinc-800 rounded-full"
                        to="/store"
                      >
                        Store
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="font-semibold text-zinc-800 rounded-full"
                        to="/contact"
                      >
                        Contact
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="font-semibold text-zinc-800 rounded-full"
                        to="/about"
                      >
                        About
                      </NavLink>
                    </li>
                  </div>
                </ul>
              </div>
              <div className="flex justify-center gap-3">
                {loggedUser === undefined ? (
                  ""
                ) : (
                  <h2 className="text-xl lg:block hidden">
                    <span className="badge badge-lg">{loggedUser}</span>
                  </h2>
                )}
                <label className="input input-bordered input-sm w-full max-w-xs flex items-center gap-2 rounded-full">
                  <input type="text" className="grow" placeholder="Search" />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 opacity-70"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </label>
                <label className="swap swap-rotate">
                  <input
                    type="checkbox"
                    className="theme-controller"
                    value="synthwave"
                  />
                  <svg
                    onClick={() => setTheme("dark")}
                    className="swap-on fill-current w-8 h-8"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                  </svg>
                  <svg
                    onClick={() => setTheme("cupcake")}
                    className="swap-off fill-current w-8 h-8"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                  </svg>
                </label>
                {loggedUser === undefined ? <Login /> : <Logout />}
              </div>
            </div>
          </div>
        </div>
        <div className="drawer-side z-50">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200">
            {loggedUser === undefined ? (
              ""
            ) : (
              <div className="avatar placeholder my-3">
                <div className="bg-neutral text-neutral-content rounded-full w-24">
                  <span className="text-3xl">
                    {String(loggedUser).substring(0, 1)}
                  </span>
                </div>
              </div>
            )}
            <hr />
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/store">Store</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
      {/* <div className="min-h-[10vh]"></div> */}
    </>
  );
};

export default Navbar;
