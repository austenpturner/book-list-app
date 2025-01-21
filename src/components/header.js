import React from "react";

export default function Header() {
  return (
    <header className="bg-blue-600 h-14 flex md:justify-center items-center fixed top-0 w-full z-20">
      <h1 className="text-white text-2xl pl-4 md:text-3xl md:text-center">
        Book List
      </h1>
    </header>
  );
}
