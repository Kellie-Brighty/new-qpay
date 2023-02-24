import React from "react";

const CurrencyCard = ({ amount, text, symbol, icon, backgroundColor }) => {
  return (
    <div
      className={`font-inter shadow-md py-[22px] px-[24px] w-[310px] space-y-5`}
      style={{ background: backgroundColor }}
    >
      <div className={`w-[40px] h-[40px]`}>
        <img src={icon} alt="" className={`w-[40px]`} />
      </div>
      <p style={{ color: backgroundColor === "black" ? "white" : "#8D8D8D" }}>
        {text}
      </p>
      <div className={`flex items-center justify-between`}>
        <p
          className={`text-[24px] font-medium`}
          style={{ color: backgroundColor === "black" ? "white" : "#000" }}
        >
          {symbol}
          {amount}.<span className={`text-[#B8B8B8]`}>00</span>
        </p>
        <div
          className={`flex items-center border-[1.5px] border-[#8D8D8D] rounded-md p-[10px] py-[5px] space-x-2`}
          style={{
            border: backgroundColor === "black" && "none",
            background: backgroundColor === "black" ? "white" : "transparent",
          }}
        >
          <img
            src={symbol === "$" ? "us_flag.png" : "ngn_flag.png"}
            alt=""
            className={`w-[20px]`}
          />
          <p className={`font-semibold`}>{symbol === "$" ? "USD" : "NGN"}</p>
        </div>
      </div>
    </div>
  );
};

export default CurrencyCard;
