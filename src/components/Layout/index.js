import React from "react";
import Footer from "./Footer";
import Navbar from "./Menu";
import "./Layout.css";

function Layout({ children }) {
  return (
    <div className="d-flex flex-column h-100">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
