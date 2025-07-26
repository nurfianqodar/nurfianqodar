import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import { Link } from "react-router";

export interface ActionLinkProps {
  to: string;
  external?: boolean;
  name: string;
}

const ActionLink: React.FC<ActionLinkProps> = ({
  to,
  name,
  external = false,
}) => {
  return (
    <Link to={to} className="group relative">
      <div className="flex gap-x-2 text-lg font-semibold">
        <span>{name}</span>
        {external && (
          <span>
            <BiLinkExternal className="text-base" />
          </span>
        )}
      </div>
      <div className="absolute bottom-1 h-[2px] w-full origin-left scale-x-50 bg-black/50 transition-transform duration-300 ease-in-out group-hover:scale-x-95 dark:bg-white/50"></div>
    </Link>
  );
};

export default ActionLink;
