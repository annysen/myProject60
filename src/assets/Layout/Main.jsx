import React from "react";
import Hedaer from "../../Components/Hedaer";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <Hedaer></Hedaer>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
