import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// icons
const shieldIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
      clipRule="evenodd"
    />
  </svg>
);
const userIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z" />
  </svg>
);
const walletIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M2.273 5.625A4.483 4.483 0 015.25 4.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0018.75 3H5.25a3 3 0 00-2.977 2.625zM2.273 8.625A4.483 4.483 0 015.25 7.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0018.75 6H5.25a3 3 0 00-2.977 2.625zM5.25 9a3 3 0 00-3 3v6a3 3 0 003 3h13.5a3 3 0 003-3v-6a3 3 0 00-3-3H15a.75.75 0 00-.75.75 2.25 2.25 0 01-4.5 0A.75.75 0 009 9H5.25z" />
  </svg>
);
const chartIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm4.5 7.5a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0v-2.25a.75.75 0 01.75-.75zm3.75-1.5a.75.75 0 00-1.5 0v4.5a.75.75 0 001.5 0V12zm2.25-3a.75.75 0 01.75.75v6.75a.75.75 0 01-1.5 0V9.75A.75.75 0 0113.5 9zm3.75-1.5a.75.75 0 00-1.5 0v9a.75.75 0 001.5 0v-9z"
      clipRule="evenodd"
    />
  </svg>
);
const windowsIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M5 3h4c1.103 0 2 .897 2 2v4c0 1.103-.897 2-2 2H5c-1.103 0-2-.897-2-2V5c0-1.103.897-2 2-2Zm10 0h4c1.103 0 2 .897 2 2v4c0 1.103-.897 2-2 2h-4c-1.103 0-2-.897-2-2V5c0-1.103.897-2 2-2ZM9 13H5c-1.103 0-2 .897-2 2v4c0 1.103.897 2 2 2h4c1.103 0 2-.897 2-2v-4c0-1.103-.897-2-2-2Zm6 0h4c1.103 0 2 .897 2 2v4c0 1.103-.897 2-2 2h-4c-1.103 0-2-.897-2-2v-4c0-1.103.897-2 2-2Z"
      clipRule="evenodd"
    />
  </svg>
);

const Landing = () => {
  const [nums, setNums] = useState([0, 0, 0]);

  const counter = (index, number, delay) => {
    let count = number - delay;
    const intCount = setInterval(() => {
      if (count >= number) clearInterval(intCount);
      count += 5;
      setNums((prevState) => {
        const newNums = [...prevState];
        newNums[index] = count;
        return newNums;
      });
    }, 75);
  };

  useEffect(() => {
    counter(0, 115, 90);
    counter(1, 85, 90);
    counter(2, 95, 90);
  }, []);

  return (
    <>
      <div className="bg-[#f4f9fc]">
        <div className="container max-w-screen-xl mx-auto px-8 md:px-4 py-14 md:py-10 rounded-xl text-left mb-10">
          <h2 className="font-semibold text-2xl mb-4 lg:mb-6 lg:text-4xl">
            <p className="text-[#232530]">Buy & Sell</p>
            <p className="text-[#5367FF]">Crypto Instant</p>
          </h2>
          <p className="text-[#232530] font-light mb-10 text-sm lg:text-xl md:w-2/3">
            Join world's biggest & trusted Exchange. Trade inBitcoin, Ethereum,
            Ripple and many more currencies.
          </p>

          <Link to="/coins">
            <button className="w-full py-4 rounded-lg font-medium bg-[#5367FF] text-white md:w-fit md:px-8">
              Start Trading
            </button>
          </Link>
        </div>
      </div>

      <div className="container max-w-screen-xl mx-auto flex flex-col md:flex-row mb-6 md:py-10">
        <div className="text-[#232530] py-7 border-b md:w-full md:border-b-0">
          <p className="font-medium text-5xl pb-1">{nums[0]}K</p>
          <p className="font-light">People have joined</p>
        </div>
        <div className="text-[#232530] py-7 border-b md:w-full md:border-b-0 md:border-l">
          <p className="font-medium text-5xl pb-1">{nums[1]}K</p>
          <p className="font-light">VIP users have joined</p>
        </div>
        <div className="text-[#232530] py-7 md:w-full md:border-l">
          <p className="font-medium text-5xl pb-1">{nums[2]}+</p>
          <p className="font-light">Big Companies have joined</p>
        </div>
      </div>

      <div className="bg-[#f1f2f4]">
        <div className="container max-w-screen-xl mx-auto text-[#232530] py-8 md:py-14 px-2 flex flex-col justify-between md:flex-row md:px-4">
          <div className="text-center md:text-left mb-10 font-medium md:max-w-xs lg:max-w-sm xl:max-w-md">
            <p className="text-[#5367FF] py-2">Create Profile</p>
            <h3 className="text-xl font-semibold pb-4 xl:text-2xl">
              Easy Way to Get Started
            </h3>
            <p className="text-sm font-light xl:text-base">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
              aspernatur voluptate quisquam laboriosam veritatis porro explicabo
              quibusdam. Incidunt eum ipsa adipisci perspiciatis officiis.
            </p>
          </div>

          <div className="px-2 flex flex-col md:flex-row md:gap-5">
            <div>
              <div className="bg-white rounded-xl p-8 flex items-center justify-start gap-x-10 mb-5 md:flex-col md:gap-y-4 lg:px-4 py-6">
                <span className="w-12 text-[#5367FF]">{shieldIcon}</span>
                <div className="text-left md:text-center">
                  <p className="font-semibold pb-2">Verify Bank Account</p>
                  <p className="text-xs lg:text-sm font-light">
                    Verify Your Bank Account in Easy Way
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-xl p-8 flex items-center justify-start gap-x-10 mb-5 md:flex-col md:gap-y-4 lg:px-4 py-6">
                <span className="w-12 text-[#5367FF]">{userIcon}</span>
                <div className="text-left md:text-center">
                  <p className="font-semibold pb-2">Create an Account</p>
                  <p className="text-xs lg:text-sm font-light">
                    Sign up with email and mobile in just 5 minutes
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-xl p-8 flex items-center justify-start gap-x-10 mb-5 md:flex-col md:gap-y-4 lg:px-4 py-6">
                <span className="w-12 text-[#5367FF]">{walletIcon}</span>
                <div className="text-left md:text-center">
                  <p className="font-semibold pb-2">Add Funds to Wallet</p>
                  <p className="text-xs lg:text-sm font-light">
                    Quickly add money to your investment wallet
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-xl p-8 flex items-center justify-start gap-x-10 md:flex-col md:gap-y-4 lg:px-4 py-6">
                <span className="w-12 text-[#5367FF]">{chartIcon}</span>
                <div className="text-left md:text-center">
                  <p className="font-semibold pb-2">Start Trading instantly</p>
                  <p className="text-xs lg:text-sm font-light">
                    But & Sell a variety of top coins at the best prices
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between">
        <div className="text-[#232530] text-center md:text-left px-4 py-14 md:max-w-xs lg:max-w-sm xl:max-w-md">
          <p className="font-medium text-[#5367FF] py-2">Download the app</p>
          <h2 className="font-semibold text-2xl mb-5">
            Trade, Anywhere, Anytime
          </h2>
          <p className="font-light text-sm xl:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            eligendi optio saepe atque iste quas similique incidunt eius
            doloremque harum quisquam, nostrum ullam cum rem laborum autem
            necessitatibus, non illum!
          </p>
        </div>

        <div className="px-4 flex justify-center flex-wrap gap-2 md:gap-4 md:py-14 mb-20">
          <div className="flex gap-x-2 md:gap-x-4">
            <div className="flex flex-col justify-evenly text-center text-[#232530] hover:bg-[#E2F2FF] duration-700 cursor-pointer p-3 rounded-lg">
              <div className="flex justify-center mb-4">{windowsIcon}</div>
              <div>
                <h4 className="font-medium mb-1">Windows</h4>
                <p className="text-xs text-[#AEB1BF]">Download for PC-Client</p>
              </div>
            </div>
            <div className="flex flex-col justify-evenly text-center text-[#232530] hover:bg-[#E2F2FF] duration-700 cursor-pointer p-3 rounded-lg">
              <div className="flex justify-center mb-4">{windowsIcon}</div>
              <div>
                <h4 className="font-medium mb-1">Windows</h4>
                <p className="text-xs text-[#AEB1BF]">Download for PC-Client</p>
              </div>
            </div>
          </div>

          <div className="flex gap-x-2 md:gap-x-4">
            <div className="flex flex-col justify-evenly text-center text-[#232530] hover:bg-[#E2F2FF] duration-700 cursor-pointer p-3 rounded-lg">
              <div className="flex justify-center mb-4">{windowsIcon}</div>
              <div>
                <h4 className="font-medium mb-1">Windows</h4>
                <p className="text-xs text-[#AEB1BF]">Download for PC-Client</p>
              </div>
            </div>
            <div className="flex flex-col justify-evenly text-center text-[#232530] hover:bg-[#E2F2FF] duration-700 cursor-pointer p-3 rounded-lg">
              <div className="flex justify-center mb-4">{windowsIcon}</div>
              <div>
                <h4 className="font-medium mb-1">Windows</h4>
                <p className="text-xs text-[#AEB1BF]">Download for PC-Client</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container max-w-screen-xl mx-auto bg-[#5367FF] py-10 md:py-14 lg:py-16 xl:py-20 text-white px-4 xl:px-8 flex flex-col justify-between gap-y-8 md:flex-row md:gap-x-8 xl:rounded-xl xl:mb-12">
        <div className="md:text-left md:w-2/4 ">
          <h3 className="font-medium text-2xl mb-4 lg:text-3xl">
            Start mining now
          </h3>
          <p className="text-sm">
            Join now with DYNAMIC to get the latest news and start mining now
          </p>
        </div>

        <div className="flex flex-col gap-y-5 md:flex-row md:gap-x-4 md:items-center lg:w-2/4">
          <input
            type="email"
            placeholder="Enter your email"
            className="bg-[#5367FF] py-2 outline-none px-2 w-full placeholder:text-[#FFFFFF70] border-b md:w-2/3"
          />
          <button className="w-full px-2 py-3 rounded-md bg-white text-[#5367FF] font-medium active:scale-90 duration-700 md:w-1/3 md:rounded-3xl">
            Subscribe
          </button>
        </div>
      </div>
    </>
  );
};

export default Landing;
