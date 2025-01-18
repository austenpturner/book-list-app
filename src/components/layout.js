import * as React from "react";
import Header from "./header";
import Nav from "./nav";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Nav />
      <main className="ml-20 mt-14 min-h-[calc(100vh - 56px)]">{children}</main>
    </>
  );
};

export default Layout;
