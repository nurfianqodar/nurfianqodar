import React from "react";
import { Outlet } from "react-router";
import NavbarContainer from "~/components/ui/navbar-container";

const BlogsLayout: React.FC = () => {
  return (
    <>
      <NavbarContainer>Navbar</NavbarContainer>
      <Outlet />
      <footer className="h-32"></footer>
    </>
  );
};

export default BlogsLayout;
