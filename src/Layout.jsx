import React from "react";
import SideBar from "./components/SideBar";

const Layout = ({ children }) => {
  return (
    <div className={`flex scrollbar-hide overflow-x-hidden`}>
      <div className={`fixed`}>
        <SideBar />
      </div>

      <div className={`ml-[240px] w-full scrollbar-hide`}>{children}</div>
    </div>
  );
};

export default Layout;
