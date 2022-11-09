import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <div className="max-w-screen-xl mx-auto">
      <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Main;
