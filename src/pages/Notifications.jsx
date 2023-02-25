import React, { useState } from "react";
import Layout from "../Layout";

const Notifications = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedVal, setSelectedVal] = useState("All users");

  return (
    <Layout>
      <div className={`h-full`} >
        <div className={`mt-[40px] px-[32px]`}>
          <p className={`text-[24px] font-semibold`}>Push Notification</p>

          <div
            className={`mt-[32px] shadow-lg flex flex-col items-start px-[99px] py-[32px]`}
          >
            <div className={`flex items-center space-x-10 ml-[40px]`}>
              <p className={`text-[18px] font-semibold`}>User</p>
              <div className={`flex items-center`}>
                <select
                  name=""
                  value={selectedVal}
                  id=""
                  onChange={(e) => setSelectedVal(e.target.value)}
                  className={`outline-none border border-[#b8b8b8] 
                  w-[335px] h-[55px] text-[14px] font-medium text-[#b8b8b8] px-[16px]`}
                >
                  <option value="single user">Single user</option>
                  <option value="all users">All user</option>
                  <option value="multiple users">Multiple user</option>
                </select>
              </div>
            </div>

            <div className={`flex items-center space-x-10 mt-[24px]`}>
              <p className={`text-[18px] font-semibold`}>Message</p>
              <div>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  className={`outline-none border border-[#b8b8b8] 
                  w-[335px] h-[156px] text-[14px] font-medium text-[#b8b8b8] px-[16px]`}
                ></textarea>
                <div
                  className={`bg-black w-[335px] h-[58px] flex justify-center items-center mt-[24px] cursor-pointer`}
                >
                  <p className={`text-white`}>Confirm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Notifications;
