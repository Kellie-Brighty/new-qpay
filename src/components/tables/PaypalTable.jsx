import React, { useState } from "react";
import DownArrow from "../../assets/down_arrow.png";

function PaypalTable() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedMenu, setSelectedMenu] = useState(null);

  const handleActionClick = (item) => {
    setSelectedItem(item);
  };

  const handleMenuClick = (item) => {
    if (selectedMenu === item.amount_usd) {
      setSelectedMenu(null);
    } else {
      setSelectedMenu(item.amount_usd);
    }
  };

  const data = [
    {
      amount_usd: 100,
      amount_ngn: "₦1,200,000",
      narration: "Qpayxyz123t",
      time: "12:00pm",
      rate: 600,
      total: "₦1,176,000",
      status: "Pending",
      action: "table_action_icon.png",
      modal: false,
      type: "FNF",
    },
    {
      amount_usd: 200,
      amount_ngn: "₦1,200,000",
      narration: "Qpayxyz123t",
      time: "12:00pm",
      rate: 600,
      total: "₦1,176,000",
      status: "Pending",
      action: "table_action_icon.png",
      modal: false,
      type: "FNF",
    },
    {
      amount_usd: 300,
      amount_ngn: "₦1,200,000",
      narration: "Qpayxyz123t",
      time: "12:00pm",
      rate: 600,
      total: "₦1,176,000",
      status: "Pending",
      action: "table_action_icon.png",
      modal: false,
      type: "FNF",
    },
    {
      amount_usd: 400,
      amount_ngn: "₦1,200,000",
      narration: "Qpayxyz123t",
      time: "12:00pm",
      rate: 600,
      total: "₦1,176,000",
      status: "Pending",
      action: "table_action_icon.png",
      modal: false,
      type: "FNF",
    },
    {
      amount_usd: 500,
      amount_ngn: "₦1,200,000",
      narration: "Qpayxyz123t",
      time: "12:00pm",
      rate: 600,
      total: "₦1,176,000",
      status: "Pending",
      action: "table_action_icon.png",
      modal: false,
      type: "FNF",
    },
    {
      amount_usd: 600,
      amount_ngn: "₦1,200,000",
      narration: "Qpayxyz123t",
      time: "12:00pm",
      rate: 600,
      total: "₦1,176,000",
      status: "Pending",
      action: "table_action_icon.png",
      modal: false,
      type: "FNF",
    },
  ];

  const updateData = (usd_amount) => {
    const array = data;

    for (const object of array) {
      if (object.amount_usd === usd_amount) {
        setModalOpen(!modalOpen);
      }
    }
  };

  return (
    <div className="flex flex-col shadow-lg">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 overflow-x-scroll scrollbar-hide">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-black text-white text-[14px]">
                <tr>
                  <th
                    scope="col"
                    className="py-[24px] px-[29px] text-left text-xs font-medium tracking-wider"
                  >
                    Amount <span className={`text-[5px]`}>USD</span>
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
                    Time
                  </th>
                  <th
                    scope="col"
                    className="py-[24px] px-[29px] text-left text-xs font-medium tracking-wider"
                  >
                    Rate
                  </th>
                  <th
                    scope="col"
                    className="py-[24px] px-[29px] text-left text-xs font-medium tracking-wider"
                  >
                    Amount <span className={`text-[5px]`}>NGN</span>
                  </th>
                  <th
                    scope="col"
                    className="py-[24px] px-[29px] text-left text-xs font-medium tracking-wider"
                  >
                    Total <span className={`text-[5px]`}>user</span>
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
                    Status
                  </th>
                  <th
                    scope="col"
                    className="py-[24px] px-[29px] text-left text-xs font-medium tracking-wider"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 font-semibold text-[12px]">
                {data.map((row, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      ${row.amount_usd}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {row.narration}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">{row.time}</td>
                    <td className="px-6 py-4 whitespace-nowrap">₦{row.rate}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {row.amount_ngn}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">{row.total}</td>
                    <td className="px-6 py-4 whitespace-nowrap flex items-center mt-1">
                      <div className={`flex items-center space-x-3`}>
                        <p>{row.type}</p>
                        <img
                          src={DownArrow}
                          className={`w-[12px] cursor-pointer`}
                          alt=""
                        />
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <p
                        className={`${
                          row.status === "Pending"
                            ? `text-[#EB5757]`
                            : `text-[#0FB043]`
                        } ${
                          row.status === "Pending"
                            ? `bg-[#eb57571a]`
                            : `bg-[#0fb0431a]`
                        } text-center rounded-full p-[6px]`}
                      >
                        {row.status}
                      </p>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap relative">
                      <img
                        src={row.action}
                        alt=""
                        className={`w-[23px] cursor-pointer`}
                        onClick={() => handleMenuClick(row)}
                      />
                      {selectedMenu === row.amount_usd && (
                        <div className="absolute right-[75px] top-0 z-10">
                          <div className="bg-white border border-[#b8b8b8] rounded py-2 mt-1 px-2">
                            <button className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left">
                              {row.status === "Pending"
                                ? "Approve"
                                : "Dis-approve"}
                            </button>
                          </div>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaypalTable;
