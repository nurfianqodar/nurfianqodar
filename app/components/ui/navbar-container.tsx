import React from "react";
import Container from "./container";

export interface NavbarContainerProps {
  children?: React.ReactNode;
}

const NavbarContainer: React.FC<NavbarContainerProps> = ({ children }) => {
  return (
    <header className="fixed top-0 right-0 left-0 flex h-20 items-center justify-center backdrop-blur-lg">
      <Container>{children}</Container>
    </header>
  );
};

export default NavbarContainer;
