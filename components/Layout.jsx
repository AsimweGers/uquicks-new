import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import SocialBar from "./SocialBar";

const Layout = ({ children }) => (
  <>
    <SocialBar />
    <Header />
    {children}
    <Footer />
  </>
);

export default Layout;
