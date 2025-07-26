import React from "react";
import { Link } from "react-router";

export interface EmblemLinkProps {
  icon: React.ReactNode;
  to: string;
  name?: string;
}

const EmblemLink: React.FC<EmblemLinkProps> = ({ icon, to, name }) => {
  return (
    <Link
      to={to}
      title={name}
      className="flex w-fit p-1 text-xl opacity-50 transition-transform duration-300 ease-in-out hover:scale-150 hover:opacity-100 md:text-3xl"
    >
      {icon}
    </Link>
  );
};

export default EmblemLink;
