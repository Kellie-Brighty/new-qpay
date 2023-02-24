import React, { useState } from "react";
import CurrencyCard from "../components/cards/CurrencyCard";
import Layout from "../Layout";

const Transactions = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const data = [
    {
      id: 1,
      name: "Trust Cephas",
      narration: "abcdQpay1",
      type: "Credit",
      bank: "First Bank",
      recipient: "Onyinye Okofu",
      amount: "₦10,000",
      status: "Success",
      timestamp: "Feb 20,23-9:24pm",
    },
    {
      id: 2,
      name: "Ayomikun Alimi",
      narration: "abcdQpay1",
      type: "Debit",
      bank: "First Bank",
      recipient: "Kelly Owoju",
      amount: "₦10,000",
      status: "Pending",
      timestamp: "Feb 20,23-9:24pm",
    },
    {
      id: 3,
      name: "Trust Cephas",
      narration: "abcdQpay1",
      type: "Debit",
      bank: "First Bank",
      recipient: "Onyinye Okofu",
      amount: "₦10,000",
      status: "Success",
      timestamp: "Feb 20,23-9:24pm",
    },
    {
      id: 4,
      name: "Trust Cephas",
      narration: "abcdQpay1",
      type: "Debit",
      bank: "First Bank",
      recipient: "Onyinye Okofu",
      amount: "₦10,000",
      status: "Failed",
      timestamp: "Feb 20,23-9:24pm",
    },
    {
      id: 5,
      name: "Trust Cephas",
      narration: "abcdQpay1",
      type: "Debit",
      bank: "First Bank",
      recipient: "Onyinye Okofu",
      amount: "₦10,000",
      status: "Pending",
      timestamp: "Feb 20,23-9:24pm",
    },
    {
      id: 6,
      name: "Trust Cephas",
      narration: "abcdQpay1",
      type: "Debit",
      bank: "First Bank",
      recipient: "Onyinye Okofu",
      amount: "₦10,000",
      status: "Success",
      timestamp: "Feb 20,23-9:24pm",
    },
  ];

  const filteredData = data.filter((data) => {
    return (
      data.name.toString().toLowerCase().includes(searchQuery.toLowerCase()) ||
      data.recipient.toLowerCase().includes(searchQuery.toLowerCase()) ||
      data.status.toString().toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <Layout>
      {/* Header Section */}
      <div className={`h-screen`}>
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

        {/* Card Section */}
        <div className={`mt-[50px]`}>
          <div className={`flex items-center justify-between px-[32px]`}>
            <CurrencyCard
              amount="200,000"
              backgroundColor="black"
              symbol="₦"
              text="Total Balance"
            />
            <CurrencyCard
              amount="500,000"
              backgroundColor="white"
              icon="total_inflow_icon.png"
              symbol="₦"
              text="Total Inflow"
            />
            <CurrencyCard
              amount="300,000"
              backgroundColor="white"
              icon="total_outflow_icon.png"
              symbol="₦"
              text="Total Outflow"
            />
          </div>
        </div>

        {/* Table Label Section */}
        <div className={`px-[32px] mt-[40px]`}>
          <div className={`flex items-center justify-between`}>
            <p className={`text-[24px] font-semibold`}>Recent transactions</p>

            <div className={`flex items-center space-x-5`}>
              <div
                className={`flex items-center bg-white shadow-md p-[11px] cursor-pointer space-x-2`}
              >
                <img src="export_icon.png" alt="" className={`w-[18px]`} />
                <p className={`text-[14px] font-medium`}>Export</p>
              </div>
              <div
                className={`flex items-center bg-white shadow-md p-[11px] cursor-pointer space-x-2`}
              >
                <img src="filter_icon.png" alt="" className={`w-[18px]`} />
                <p className={`text-[14px] font-medium`}>Filter by date</p>
              </div>
            </div>
          </div>
        </div>

        {/* Table Section */}
        <div className={`px-[32px] mt-[32px] w-[1010px] pb-[50px]`}>
          <div className="flex flex-col shadow-lg max-w-full">
            <div className="-my-2 overflow-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-x-scroll border-b border-gray-200 scrollbar-hide">
                  <table className="min-w-full divide-y divide-gray-200 overflow-x-scroll scrollbar-hide">
                    <thead className="bg-black text-white text-[14px] ">
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
                          Narration
                        </th>
                        <th
                          scope="col"
                          className="py-[24px] px-[29px] text-left text-xs font-medium tracking-wider"
                        >
                          Type
                        </th>
                        <th
                          scope="col"
                          className="py-[24px] px-[29px] text-left text-xs font-medium tracking-wider"
                        >
                          Bank
                        </th>
                        <th
                          scope="col"
                          className="py-[24px] px-[29px] text-left text-xs font-medium tracking-wider"
                        >
                          Recipient
                        </th>
                        <th
                          scope="col"
                          className="py-[24px] px-[29px] text-left text-xs font-medium tracking-wider"
                        >
                          Amount
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
                          Timestamp
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
                            {row.narration}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <p
                              className={`${
                                row.type === "Debit"
                                  ? `text-[#EB5757]`
                                  : `text-[#0FB043]`
                              } ${
                                row.type === "Debit"
                                  ? `bg-[#eb57571a]`
                                  : `bg-[#0fb0431a]`
                              } text-center rounded-full p-[6px]`}
                            >
                              {row.type}
                            </p>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap relative">
                            {row.bank}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap relative">
                            {row.recipient}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap relative">
                            {row.amount}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <p
                              className={`${
                                row.status === "Failed" && `text-[#EB5757]`
                              } ${
                                row.status === "Success" && `text-[#0FB043]`
                              } ${
                                row.status === "Pending" && "text-[#B3AC02]"
                              } ${
                                row.status === "Failed" && `bg-[#eb57571a]`
                              } ${
                                row.status === "Success" && "bg-[#0fb0431a]"
                              } ${
                                row.status === "Pending" && "bg-[#b3ac021a]"
                              } text-center rounded-full p-[6px]`}
                            >
                              {row.status}
                            </p>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap relative">
                            {row.timestamp}
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

export default Transactions;
