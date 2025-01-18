import React from "react";
import { navItems } from "../config/mainNav";

export default function Nav() {
  return (
    <nav className="fixed min-h-screen -mt-14 w-20 bg-white border-r-2 flex justify-center">
      <ul className="flex flex-col items-center justify-center gap-y-5">
        {navItems.map((item) => {
          return (
            <li key={item.id}>
              <a href={item.link}>
                <span className="hidden">{item.name}</span>
                <item.icon
                  className={`text-slate-900 ${
                    item.name === "profile" ? "w-16 h-16" : "w-10 h-10"
                  }`}
                />
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
