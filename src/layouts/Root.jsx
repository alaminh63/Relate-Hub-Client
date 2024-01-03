import React from "react";
import { Outlet } from "react-router-dom";
import NavigationBar from "../Copmonents/Shared/NavigationBar/NavigationBar";

const Root = () => {
  return (
    <div>
      <NavigationBar />
      <div className="max-w-[1400px] mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
