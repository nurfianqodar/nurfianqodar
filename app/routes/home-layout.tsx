import React from "react";
import { Outlet } from "react-router";
import NavbarContainer from "~/components/ui/navbar-container";

const HomeLayout: React.FC = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default HomeLayout;
