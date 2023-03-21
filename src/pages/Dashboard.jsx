import React from "react";
import CurrencyCard from "../components/cards/CurrencyCard";
import SideBar from "../components/SideBar";
import Table from "../components/tables/Table";
import Layout from "../Layout";
import { TabPanel, useTabs } from "react-headless-tabs";
import { TabSelector } from "../components/TabSelector";
import PaypalTable from "../components/tables/PaypalTable";

const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useTabs(["payoneer", "paypal"]);

  return (
    <Layout>
      <div className={`w-full scrollbar-hide h-screen`}>
        <div
          className={`flex items-center justify-between w-full bg-white px-[32px] py-[34px] sticky top-0`}
        >
          <nav className="flex border-b border-[#F0F0F0]">
            <TabSelector
              isActive={selectedTab === "payoneer"}
              onClick={() => setSelectedTab("payoneer")}
            >
              Payoneer
            </TabSelector>
            <TabSelector
              isActive={selectedTab === "paypal"}
              onClick={() => setSelectedTab("paypal")}
            >
              PayPal
            </TabSelector>
          </nav>

          <div
            className={`flex items-center shadow-md p-[11px] space-x-1 cursor-pointer`}
          >
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

        <div className={`px-[32px] pb-[50px]`}>
          <p className={`text-[24px] font-semibold my-[45px]`}>
            Transaction History
          </p>
          <div className="p-4">
            <TabPanel hidden={selectedTab !== "payoneer"}>
              <Table />
            </TabPanel>
            <TabPanel hidden={selectedTab !== "paypal"}>
              <PaypalTable />
            </TabPanel>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
