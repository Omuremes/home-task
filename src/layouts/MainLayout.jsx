import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

function Mainlayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Mainlayout;
