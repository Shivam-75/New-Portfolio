import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <header>
      <Navbar />
      <Outlet />
      <Footer />
    </header>
  );
}

export default Layout;
