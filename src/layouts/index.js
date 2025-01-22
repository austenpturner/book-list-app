import * as React from "react";
import Header from "../components/header";
import Nav from "../components/nav";
import Overlay from "../components/overlay";
import Modal from "../components/modal";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Nav />
      <Overlay />
      <Modal />
      <main className="mt-14 md:ml-20">{children}</main>
    </>
  );
};

export default Layout;
