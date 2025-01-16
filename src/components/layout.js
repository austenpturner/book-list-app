import * as React from "react";
import { Link } from "gatsby";

const Layout = ({ pageTitle, children }) => {
  return (
    <div className="">
      <nav>
        <ul>
          <li>
            <Link to="/">to read</Link>
          </li>
          <li>
            <Link to="/about">finished</Link>
          </li>
        </ul>
      </nav>
      <main className="bg-slate-50">
        <h1 className="text-center">{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
