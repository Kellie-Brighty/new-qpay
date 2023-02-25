import React, { useState } from "react";
import Layout from "../Layout";

const ManageUsers = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const data = [
    {
      id: 1,
      name: "Trust Cephas",
      email: "cephastrust@gmail.com",
      phone_number: "07012345678",
      bvn: "002345689",
      status: "Active",
      date_created: "09/02/2023",
      last_login: "Feb 20,23-9:24pm",
    },
    {
      id: 2,
      name: "Trust Cephas",
      email: "kellyowoju@gmail.com",
      phone_number: "09112345678",
      bvn: "17234568",
      status: "Active",
      date_created: "09/02/2023",
      last_login: "Feb 20,23-9:24pm",
    },
    {
      id: 3,
      name: "Trust Cephas",
      email: "cephastrust@gmail.com",
      phone_number: "07012345678",
      bvn: "002345689",
      status: "Active",
      date_created: "09/02/2023",
      last_login: "Feb 20,23-9:24pm",
    },
    {
      id: 4,
      name: "Trust Cephas",
      email: "cephastrust@gmail.com",
      phone_number: "07012345678",
      bvn: "002345689",
      status: "Active",
      date_created: "09/02/2023",
      last_login: "Feb 20,23-9:24pm",
    },
    {
      id: 5,
      name: "Trust Cephas",
      email: "cephastrust@gmail.com",
      phone_number: "07012345678",
      bvn: "002345689",
      status: "Active",
      date_created: "09/02/2023",
      last_login: "Feb 20,23-9:24pm",
    },
    {
      id: 6,
      name: "Trust Cephas",
      email: "cephastrust@gmail.com",
      phone_number: "07012345678",
      bvn: "002345689",
      status: "Active",
      date_created: "09/02/2023",
      last_login: "Feb 20,23-9:24pm",
    },
  ];

  const filteredData = data.filter((data) => {
    return (
      data.phone_number.toString().toLowerCase().includes(searchQuery.toLowerCase()) ||
      data.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      data.bvn.toString().toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <Layout>
      <div className={`h-screen`}>
        {/* Searchbox Header Section */}
        <div
          className={`h-[69px] w-full shadow-xl bg-white flex items-center px-[32px] sticky top-0`}
        >
          <div
            className={`bg-background rounded-sm w-[408px] h-[41px] flex items-center px-[20px]`}
          >
            <input
              type="text"
              className={`outline-none w-full h-full bg-background text-[12px] font-normal`}
              placeholder="search user by name, recipient or transaction status"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <img src="search_icon.png" alt="" className={`w-[16px]`} />
          </div>
        </div>

        {/* Title Flex Section */}
        <div
          className={`flex items-center justify-between px-[32px] w-full mt-[40px]`}
        >
          <p className={`text-[24px] font-semibold`}>Quick Overview</p>
          <div
            className={`flex items-center bg-white shadow-md p-[11px] cursor-pointer space-x-2`}
          >
            <img src="filter_icon.png" alt="" className={`w-[18px]`} />
            <p className={`text-[14px] font-medium`}>Filter by date</p>
          </div>
        </div>

        {/* Card Section */}
        <div className={`px-[32px] mt-[36px]`}>
          <div
            className={`font-inter shadow-md py-[22px] px-[24px] w-[379px] space-y-5 bg-black`}
          >
            <img src="user_icon.png" alt="" className={`w-[40px]`} />
            <p className={`text-[20px] font-medium text-[#f7f7f7]`}>
              Total User
            </p>
            <p className={`text-[32px] font-medium text-[#fff]`}>20,000</p>
          </div>
        </div>

        {/* Table Section */}
        <div className={`px-[32px]`}>
          <p className={`text-[24px] font-semibold my-[40px]`}>Manage Users</p>

          {/* Table */}
          <div className="flex flex-col shadow-lg">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-black text-white text-[14px]">
                      <tr>
                        <th
                          scope="col"
                          className="py-[24px] px-[29px] text-left text-xs font-medium tracking-wider"
                        >
                          S/N
                        </th>
                        <th
                          scope="col"
                          className="py-[24px] px-[29px] text-left text-xs font-medium tracking-wider"
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="py-[24px] px-[29px] text-left text-xs font-medium tracking-wider"
                        >
                          Email address
                        </th>
                        <th
                          scope="col"
                          className="py-[24px] px-[29px] text-left text-xs font-medium tracking-wider"
                        >
                          Phone Number
                        </th>
                        <th
                          scope="col"
                          className="py-[24px] px-[29px] text-left text-xs font-medium tracking-wider"
                        >
                          BVN
                        </th>
                        <th
                          scope="col"
                          className="py-[24px] px-[29px] text-left text-xs font-medium tracking-wider"
                        >
                          Status
                        </th>
                        <th
                          scope="col"
                          className="py-[24px] px-[29px] text-left text-xs font-medium tracking-wider"
                        >
                          Date Created
                        </th>
                        <th
                          scope="col"
                          className="py-[24px] px-[29px] text-left text-xs font-medium tracking-wider"
                        >
                          Last login
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 font-semibold text-[12px]">
                      {filteredData.map((row, index) => (
                        <tr key={index}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {row.id}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {row.name}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {row.email}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {row.phone_number}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {row.bvn}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <p
                              className={`${
                                row.status === "Inactive"
                                  ? `text-[#EB5757]`
                                  : `text-[#0FB043]`
                              } ${
                                row.status === "Inactive"
                                  ? `bg-[#eb57571a]`
                                  : `bg-[#0fb0431a]`
                              } text-center rounded-full p-[6px]`}
                            >
                              {row.status}
                            </p>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {row.date_created}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {row.last_login}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ManageUsers;
