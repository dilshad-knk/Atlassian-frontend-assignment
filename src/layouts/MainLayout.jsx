import React from "react";
import Navbar from "../components/Navbar";
import { NavLink, Outlet } from "react-router-dom";
import SubNavbar from "../components/Subnavabar";
import Aside from "../components/Aside";

const MainLayout = () => {
  return (
    <>
      <header>
        <Navbar />
        <SubNavbar />
      </header>
     <main>
        <Outlet />
      </main>
     
  
    </>
  );
};

export default MainLayout;
