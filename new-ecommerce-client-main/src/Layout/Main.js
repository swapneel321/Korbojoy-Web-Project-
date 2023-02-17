import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Common/Footer";
import Navbar from "../components/Common/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>

      <Outlet></Outlet>

      <Footer></Footer>
    </div>
  );
};

export default Main;
