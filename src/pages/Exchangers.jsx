import React from "react";
import ExchangerTable from "../components/tables/ExchangerTable";
import Layout from "../Layout";

const Exchangers = () => {
  return (
    <Layout>
      <div className={`w-full scrollbar-hide h-screen`}>
        <div
          className={`flex items-center justify-between w-full bg-white px-[32px] py-[34px] sticky top-0`}
        >
          <p className={`text-[24px] font-semibold`}>Exchange rate</p>
        </div>

        <div className={`px-[32px]`}>
          <p className={`text-[18px] font-medium text-[#323232]`} >Current exchange rate</p>
          <div
            className={`flex items-center border border-[#b8b8b8] w-[289px] px-[20px] mt-[16px]`}
          >
            <div className={`flex items-center w-full h-[58px] space-x-1`}>
              <img src="us_flag.png" alt="" className={`w-[15px]`} />
              <p className={`text-[14px] font-medium text-[#b8b8b8]`}>
                United States Dollar
              </p>
            </div>
            <div className={`flex items-center h-full w-2/5`}>
              <p>₦</p>
              <input
                type="number"
                placeholder="0"
                className={`h-full w-full outline-none text-[16px] font-semibold text-[#323232]`}
              />
            </div>
          </div>
          <div
            className={`bg-black w-[289px] h-[58px] flex justify-center items-center mt-[24px] cursor-pointer`}
          >
            <p className={`text-white`}>Confirm</p>
          </div>
        </div>

        <div className={`px-[32px] pb-[50px]`}>
          <p className={`text-[24px] font-semibold my-[45px]`}>
            Exchangers
          </p>
          <ExchangerTable />
        </div>
      </div>
    </Layout>
  );
};

export default Exchangers;
