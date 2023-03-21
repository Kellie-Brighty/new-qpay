import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Dashboard_Icon from "../assets/dashboard_icon.png";
import Active_Dashboard_Icon from "../assets/active_dashboard_icon.png";
import Exchanger_Icon from "../assets/exchangers_icon.png";
import Active_Exchanger_Icon from "../assets/active_exchangers_icon.png";
import Transaction_Icon from "../assets/transactions_icon.png";
import Active_Transaction_Icon from "../assets/active_transactions_icon.png";
import Manage_Users_Icon from "../assets/manage_users_icon.png";
import Active_Manage_Users_Icon from "../assets/active_manage_users_icon.png";
import Push_Notifications_Icon from "../assets/push_notifications_icon.png";
import Active_Push_Notifications_Icon from "../assets/active_push_notifications_icon.png";
import Sign_Out_Icon from "../assets/signout_icon.png";
import Avatar from "../assets/avatar.png"

const SideBar = ({ logo }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathArray = location.pathname.split("/");
  console.log(pathArray);

  console.log(location.pathname);

  const links = [
    {
      title: "Dashboard",
      route: "/dashboard",
      icon: Dashboard_Icon,
      active_icon: Active_Dashboard_Icon,
      path: "dashboard",
    },
    {
      title: "Exchangers",
      route: "/exchangers",
      icon: Exchanger_Icon,
      active_icon: Active_Exchanger_Icon,
      path: "exchangers",
    },
    {
      title: "Transactions",
      route: "/transactions",
      icon: Transaction_Icon,
      active_icon: Active_Transaction_Icon,
      path: "transactions",
    },
    {
      title: "Manage Users",
      route: "/manage_users",
      icon: Manage_Users_Icon,
      active_icon: Active_Manage_Users_Icon,
      path: "manage_users",
    },
    {
      title: "Push note",
      route: "/notifications",
      icon: Push_Notifications_Icon,
      active_icon: Active_Push_Notifications_Icon,
      path: "notifications",
    },
  ];

  return (
    <div
      className={`h-screen w-[240px] bg-black p-[34px] flex flex-col justify-between`}
    >
      <div className={`z-10`}>
        <img src={logo} alt="" className={`w-[123.69px]`} />
      </div>

      <div className={`basis-1/5`}>
        {links.map((link) => (
          <div
            className={`flex items-center space-x-4 my-[30px] cursor-pointer`}
            onClick={() => navigate(`${link.route}`)}
          >
            <img
              src={
                location.pathname === link.route || pathArray[1] === link.path
                  ? link.active_icon
                  : link.icon
              }
              alt=""
              className={`w-[24px]`}
            />
            <p
              className={`text-[18px] ${
                location.pathname === link.route || pathArray[1] === link.path
                  ? "font-semibold"
                  : "font-normal"
              } text-white`}
            >
              {link.title}
            </p>
          </div>
        ))}
      </div>

      <div className={`basis-2/12`}>
        <div
          className={`flex items-center space-x-4 my-[20px] cursor-pointer`}
          onClick={() => navigate("/")}
        >
          <img src={Sign_Out_Icon} alt="" className={`w-[24px]`} />
          <p className={`text-[18px] font-normal text-white`}>Sign Out</p>
        </div>
        <div
          className={`flex items-center space-x-4 mt-[40px] cursor-pointer`}
          onClick={() => navigate("/")}
        >
          <img src={Avatar} alt="" className={`w-[24px]`} />
          <p className={`text-[18px] font-normal text-white`}>Admin 1</p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;