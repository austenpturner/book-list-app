import * as React from "react";
import Header from "../components/header";
import Nav from "../components/nav";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Nav />
      <main className="mt-14 md:ml-20">{children}</main>
    </>
  );
};

export default Layout;
