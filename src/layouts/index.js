import * as React from "react";
import Header from "../components/header";
import Nav from "../components/nav";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Nav />
      <main className="md:ml-20 mt-14 min-h-[calc(100vh - 56px)]">
        {children}
      </main>
    </>
  );
};

export default Layout;
