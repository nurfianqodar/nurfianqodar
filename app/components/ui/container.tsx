import React from "react";

export interface ContainerProps {
  children?: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="container mx-auto flex items-center justify-center px-5 sm:px-6 md:px-8 lg:px-12">
      <div className="container">{children}</div>
    </div>
  );
};

export default Container;
