import React, { useState } from "react";
import Layout from "../Layout";
import Avatar from "../assets/avatar.png";
import Export_Icon from "../assets/export_icon.png";
import Filter_Icon from "../assets/filter_icon.png";
import { useParams, useNavigate, useLocation } from "react-router-dom";

const SingleUser = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const pathArray = location.pathname.split("/");
  const tabPath = pathArray[pathArray.length - 1];

  console.log("Tab Array:::", tabPath);

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
      <div className={`h-screen mb-[100px] xl:mb-[300px]`}>
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
        </div>

        {/* Card Section */}
        <div className={`px-[32px] mt-[36px] flex space-x-10`}>
          <div
            className={`font-inter shadow-md py-[22px] px-[24px] w-[379px] bg-black h-[209px]`}
          >
            <div>
              <p className={`text-[12px] font-medium text-white`}>
                VIRTUAL ACCOUNT BALANCE
              </p>
              <p className={`text-[32px] font-normal text-[#f7f7f7] mt-[20px]`}>
                ₦20,000.<span className={`text-[#ccc]`}>00</span>
              </p>
            </div>
            <div className={`mt-[58px]`}>
              <p className={`text-[16px] font-semibold text-[#fff]`}>
                Account Number : 123456789
              </p>
            </div>
          </div>

          <div
            className={`font-inter shadow-md py-[22px] px-[24px] w-[379px] bg-white h-[209px]`}
          >
            <div className={`flex justify-between`}>
              <img src={Avatar} alt="" className={`w-[71px]`} />
              <p
                className={`text-[#FC1616] font-medium text-[12px] border border-[#FC1616] rounded-md h-[25px] flex justify-center items-center px-[15px]`}
              >
                Deactivate
              </p>
            </div>
            <div className={`mt-[15px]`}>
              <p className={`text-[16px] font-medium`}>Cephas Trust</p>
              <p className={`text-[14px] text-[#565656] font-medium`}>
                Cephastrust@gmail.com
              </p>
            </div>

            <div className={`mt-[20px]`}>
              <p className={`text-[12px] text-[#8d8d8d] font-medium`}>
                User Since 12/02/2023
              </p>
            </div>
          </div>
        </div>

        {/* Table Section */}
        <div className={`mt-[40px] px-[32px]`}>
          <div className={`flex items-center justify-between`}>
            <div className={`flex items-center space-x-5`}>
              <p
                className={`text-[24px] font-semibold cursor-pointer ${
                  tabPath === "transactions" && "border-b"
                } ${tabPath === "transactions" && "border-black"} ${
                  tabPath === "transactions" && "border-b-[3px]"
                }`}
                onClick={() => navigate(`/manage_users/${id}/transactions`)}
              >
                Transactions
              </p>
              <p
                className={`text-[24px] font-semibold cursor-pointer ${
                  tabPath === "personal_information" && "border-b"
                } ${tabPath === "personal_information" && "border-black"} ${
                  tabPath === "personal_information" && "border-b-[3px]"
                }`}
                onClick={() =>
                  navigate(`/manage_users/${id}/personal_information`)
                }
              >
                Personal information
              </p>
            </div>

            <div className={`flex items-center space-x-5`}>
              <div
                className={`flex items-center bg-white shadow-md p-[11px] cursor-pointer space-x-2`}
              >
                <img src={Export_Icon} alt="" className={`w-[18px]`} />
                <p className={`text-[14px] font-medium`}>Export</p>
              </div>
              <div
                className={`flex items-center bg-white shadow-md p-[11px] cursor-pointer space-x-2`}
              >
                <img src={Filter_Icon} alt="" className={`w-[18px]`} />
                <p className={`text-[14px] font-medium`}>Filter by date</p>
              </div>
            </div>
          </div>

          {/* Table */}
          {tabPath === "transactions" ? (
            <div className="flex flex-col shadow-lg mt-[32px]">
              <div className="-my-2  sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8 max-w-[800px]">
                  <div className="shadow overflow-hidden border-b border-gray-200 overflow-x-scroll scrollbar-hide">
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
          ) : (
            <div className={`bg-white shadow-lg py-[30px] px-[32px] mt-[34px]`}>
              <div className={`flex space-x-10`}>
                <p className={`text-[16px] font-medium text-black`}>
                  Personal Data
                </p>

                <div className={`space-y-5`}>
                  <div>
                    <p>Name</p>
                    <input
                      type="text"
                      placeholder="Name"
                      className={`w-[335px] h-[55px] outline-none border border-[#f0f0f0] px-[16px]`}
                    />
                  </div>

                  <div>
                    <p>Phone number</p>
                    <input
                      type="number"
                      placeholder="Phone number"
                      className={`w-[335px] h-[55px] outline-none border border-[#f0f0f0] px-[16px]`}
                    />
                  </div>
                </div>

                <div className={`space-y-5`}>
                  <div>
                    <p>Email address</p>
                    <input
                      type="text"
                      placeholder="Email address"
                      className={`w-[335px] h-[55px] outline-none border border-[#f0f0f0] px-[16px]`}
                    />
                  </div>

                  <div>
                    <p>Bank Verification Number (11 digits)</p>
                    <input
                      type="number"
                      placeholder="BVN"
                      className={`w-[335px] h-[55px] outline-none border border-[#f0f0f0] px-[16px]`}
                      value={123456978}
                    />
                  </div>
                </div>
              </div>

              <div className={`flex justify-between mt-[40px]`}>
                <div />
                <div
                  className={`w-[141px] h-[55px] bg-black flex items-center justify-center cursor-pointer`}
                >
                  <p className={`text-white`}>Save</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default SingleUser;
