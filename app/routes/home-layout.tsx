import React from "react";
import { Outlet } from "react-router";

const HomeLayout: React.FC = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default HomeLayout;
