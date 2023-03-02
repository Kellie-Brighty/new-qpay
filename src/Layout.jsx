import React from "react";
import SideBar from "./components/SideBar";
import Logo from "./assets/qpay_logo_white.png";

const Layout = ({ children }) => {
  return (
    <div className={`flex scrollbar-hide overflow-x-hidden`}>
      <div className={`fixed`}>
        <SideBar logo={Logo} />
      </div>

      <div className={`ml-[240px] w-full scrollbar-hide`}>{children}</div>
    </div>
  );
};

export default Layout;
