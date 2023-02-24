import React, { useState } from "react";

const ExchangerTable = () => {
  const [selectedMenu, setSelectedMenu] = useState(null);

  const handleMenuClick = (item) => {
    if (selectedMenu === item.id) {
      setSelectedMenu(null);
    } else {
      setSelectedMenu(item.id);
    }
  };

  const data = [
    {
      id: 1,
      email: "cephastrust@gmail.com",
      avatar: "exchanger_avatar.png",
      state: "Inactive",
      action: "table_action_icon.png",
    },
    {
      id: 2,
      email: "cephastrust@gmail.com",
      avatar: "exchanger_avatar.png",
      state: "Inactive",
      action: "table_action_icon.png",
    },
    {
      id: 3,
      email: "cephastrust@gmail.com",
      avatar: "exchanger_avatar.png",
      state: "Inactive",
      action: "table_action_icon.png",
    },
    {
      id: 4,
      email: "cephastrust@gmail.com",
      avatar: "exchanger_avatar.png",
      state: "Inactive",
      action: "table_action_icon.png",
    },
    {
      id: 5,
      email: "cephastrust@gmail.com",
      avatar: "exchanger_avatar.png",
      state: "Inactive",
      action: "table_action_icon.png",
    },
    {
      id: 6,
      email: "cephastrust@gmail.com",
      avatar: "exchanger_avatar.png",
      state: "Active",
      action: "table_action_icon.png",
    },
  ];

  return (
    <div className="flex flex-col shadow-lg">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-black text-white">
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
                    Email address
                  </th>
                  <th
                    scope="col"
                    className="py-[24px] px-[29px] text-left text-xs font-medium tracking-wider"
                  >
                    Avatar
                  </th>
                  <th
                    scope="col"
                    className="py-[24px] px-[29px] text-left text-xs font-medium tracking-wider"
                  >
                    State
                  </th>
                  <th
                    scope="col"
                    className="py-[24px] px-[29px] text-left text-xs font-medium tracking-wider"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 font-semibold text-[16px]">
                {data.map((row, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap">{row.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{row.email}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <img src={row.avatar} alt="" className={`w-[39px]`} />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <p
                        className={`${
                          row.state === "Inactive"
                            ? `text-[#EB5757]`
                            : `text-[#0FB043]`
                        } ${
                          row.state === "Inactive"
                            ? `bg-[#eb57571a]`
                            : `bg-[#0fb0431a]`
                        } text-center rounded-full p-[6px]`}
                      >
                        {row.state}
                      </p>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap relative">
                      <img
                        src={row.action}
                        alt=""
                        className={`w-[23px] cursor-pointer`}
                        onClick={() => handleMenuClick(row)}
                      />
                      {selectedMenu === row.id && (
                        <div className="absolute right-[140px] top-0 z-20">
                          <div className="bg-white border border-[#b8b8b8] rounded py-2 mt-1 px-2">
                            <button className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left">
                              {row.state === "Inactive"
                                ? "Activate"
                                : "Deactivate"}
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
};

export default ExchangerTable;
