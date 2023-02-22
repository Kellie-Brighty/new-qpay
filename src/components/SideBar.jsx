import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const links = [
    {
      title: "Dashboard",
      route: "/dashboard",
      icon: "dashboard_icon.png",
      active_icon: "active_dashboard_icon.png",
    },
    {
      title: "Exchangers",
      route: "/exchangers",
      icon: "exchangers_icon.png",
      active_icon: "active_exchangers_icon.png",
    },
    {
      title: "Transactions",
      route: "/transactions",
      icon: "transactions_icon.png",
      active_icon: "active_transactions_icon.png",
    },
    {
      title: "Manage Users",
      route: "/manage_users",
      icon: "manage_users_icon.png",
      active_icon: "active_manage_users_icon.png",
    },
    {
      title: "Push note",
      route: "/notifications",
      icon: "push_notifications_icon.png",
      active_icon: "active_push_notifications_icon.png",
    },
  ];

  return (
    <div
      className={`h-screen w-[240px] bg-black p-[34px] flex flex-col justify-between`}
    >
      <div>
        <img src="qpay_logo_white.png" alt="" className={`w-[123.69px]`} />
      </div>

      <div className={`basis-1/5`}>
        {links.map((link) => (
          <div
            className={`flex items-center space-x-4 my-[30px] cursor-pointer`}
            onClick={() => navigate(`${link.route}`)}
          >
            <img
              src={
                location.pathname === link.route ? link.active_icon : link.icon
              }
              alt=""
              className={`w-[24px]`}
            />
            <p
              className={`text-[18px] ${
                location.pathname === link.route
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
        <div className={`flex items-center space-x-4 my-[20px] cursor-pointer`}>
          <img src="signout_icon.png" alt="" className={`w-[24px]`} />
          <p className={`text-[18px] font-normal text-white`}>Sign Out</p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
