import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Copmonents/Shared/Footer/Footer";
import NavigationBar from "../Copmonents/Shared/NavigationBar/NavigationBar";

const Root = () => {
  return (
    <div>
      <NavigationBar />

      <Outlet />

      <Footer />
    </div>
  );
};

export default Root;
