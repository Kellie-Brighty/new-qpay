import React from "react";
import CurrencyCard from "../components/cards/CurrencyCard";
import SideBar from "../components/SideBar";
import Table from "../components/Table";
import Layout from "../Layout";

const Dashboard = () => {
  return (
    <Layout>
      <div className={`w-full scrollbar-hide`}>
        <div
          className={`flex items-center justify-between w-full bg-white px-[32px] py-[34px] sticky top-0`}
        >
          <p className={`text-[24px] font-semibold font-inter`}>
            Quick Overview
          </p>

          <div className={`flex items-center shadow-md p-[11px] space-x-1 cursor-pointer`}>
            <img src="filter_icon.png" alt="" className={`w-[12px]`} />
            <p className={`text-[14px] font-medium`}>Filter by date</p>
          </div>
        </div>

        <div className={` overflow-scroll scrollbar-hide pb-[8px]`}>
          <div className={`flex items-center justify-between px-[32px]`}>
            <CurrencyCard
              amount="500,000"
              backgroundColor="black"
              symbol="$"
              text="Total Balance"
            />
            <CurrencyCard
              amount="500,000"
              backgroundColor="white"
              icon="total_inflow_icon.png"
              symbol="$"
              text="Total Inflow"
            />
            <CurrencyCard
              amount="500,000"
              backgroundColor="white"
              icon="total_outflow_icon.png"
              symbol="$"
              text="Total Outflow"
            />
          </div>
        </div>

        <div className={`px-[32px] pb-[50px]`} >
          <p className={`text-[24px] font-semibold my-[45px]`} >Transaction History</p>
          <Table />
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
