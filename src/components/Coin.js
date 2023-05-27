import React from "react";
import graph1 from "../images/graph1.png";
import graph2 from "../images/graph2.png";

// styles
const coinBox =
  "flex items-center justify-between gap-x-3 overflow-scroll md:overflow-hidden text-[#232530] dark:text-[#f1f1f1] mb-6 md:mb-0 md:py-4 md:hover:bg-[#f4f9fc] dark:bg-[#121318] dark:md:hover:bg-[#080808] duration-700";

const Coin = ({ name, image, symbol, price, marketCap, priceChange }) => {
  return (
    <div className={coinBox}>
      {/* name */}
      <div className="flex items-center gap-x-3 md:w-60">
        <img src={image} alt={name} className="w-8 lg:w-10"/>
        <div className="flex flex-col text-left">
          <span className="font-medium">{name}</span>
          <span className="text-xs text-[#9295A6]">{symbol.toUpperCase()}</span>
        </div>
      </div>
        {/* price mobile */}
      <div className="flex flex-col gap-y-2 md:flex-row md:justify-between md:w-72 lg:w-[350px] xl:w-[435px]">
        <div className="flex justify-end font-medium">
          <span>$</span> {price.toLocaleString()}
        </div>
        {/* price change */}
       <div className="flex items-center gap-x-2 justify-center">
       <span className={priceChange > 0 ? "text-[#48D49E] text-xs font-medium md:text-base" : "text-[#FF8266] text-xs font-medium md:text-base"}>
          {priceChange} %
        </span>
        <span className="w-12 md:w-14">
          {priceChange > 0 ? (
            <img src={graph1} alt="graph" />
          ) : (
            <img src={graph2} alt="graph" />
          )}
        </span>
       </div>
      </div>
     
       {/* marketCap */}
      <span className="hidden md:block font-medium md:w-48 text-right">${marketCap.toLocaleString()}</span>
    </div>
  );
};

export default Coin;
