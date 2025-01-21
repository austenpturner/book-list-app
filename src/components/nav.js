import React from "react";
import { navItems } from "../config/mainNav";
import { Link } from "gatsby";
import { useLocation } from "@reach/router";

export default function Nav() {
  const location = useLocation();

  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="fixed w-full h-14 bottom-0 border-t-2 md:min-h-screen md:-mt-14 md:w-20 bg-white md:border-r-2 md:border-t-0 flex justify-center z-10">
      <ul className="flex items-center justify-evenly w-full md:flex-col md:justify-center md:gap-y-5">
        {navItems.map((item) => {
          return (
            <li key={item.id}>
              <Link to={item.link}>
                <span className="hidden">{item.name}</span>
                <item.icon
                  className={`${
                    isActive(item.link) ? "text-blue-600" : "text-slate-900"
                  } ${
                    item.name === "profile"
                      ? "w-16 h-16 -mt-8 bg-white rounded-full md:mt-0"
                      : "w-8 h-8 md:w-10 md:h-10"
                  }`}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
