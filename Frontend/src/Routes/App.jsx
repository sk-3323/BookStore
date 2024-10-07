import "../App.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import toast, { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
      <Toaster />
    </>
  );
}

export default App;
