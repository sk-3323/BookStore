import { useState } from "react";
import "../App.css";
import LandingPage from "../Components/LandingPage";
import Navbar from "../Components/Navbar";
import Course from "../Components/Course";
import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}

export default App;
