import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import App from "./Routes/App.jsx";
import Home from "./Routes/Home.jsx";
import Store from "./Components/Store.jsx";
import Signup from "./Components/Signup.jsx";
import Contact from "./Components/Contact.jsx";
import { Provider } from "react-redux";
import bookStore from "./Store/index.js";
import { useSelector } from "react-redux";
import About from "./Components/About.jsx";
import AdminHome from "./Components/Admin/AdminHome.jsx";
import SingleBook from "./Components/SingleBook.jsx";
import AddBook from "./Components/Admin/AddBook.jsx";
import DisplayBooks from "./Components/Admin/DisplayBooks.jsx";
import UpdateBook from "./Components/Admin/UpdateBook.jsx";
import Dashboard from "./Components/Admin/Dashboard.jsx";
import Route from "./Routes/Route.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Route />,
    children: [
      {
        path: "/",
        element: <App />,
        children: [
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "/store",
            element: <Store />,
          },
          {
            path: "/contact",
            element: <Contact />,
          },
          {
            path: "/about",
            element: <About />,
          },
          {
            path: "/store/book/:id",
            element: <SingleBook />,
          },
        ],
      },
      {
        path: "/admin",
        element: <AdminHome />,
        children: [
          {
            path: "",
            element: <Dashboard />,
          },
          {
            path: "add-book",
            element: <AddBook />,
          },
          {
            path: "books",
            element: <DisplayBooks />,
          },
          {
            path: "update-book/:id",
            element: <UpdateBook />,
          },
        ],
      },
    ],
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={bookStore}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
