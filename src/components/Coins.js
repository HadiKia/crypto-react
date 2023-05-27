import React, { useState, useEffect } from "react";

// API
import { getCoin } from "../services/api";

// Components
import Loader from "../animation/Loader";
import Coin from "./Coin";
import { Tab } from "@headlessui/react";
import { Fragment } from "react";

// styles
const buttonCategory =
  "outline-none pb-4 md:pb-5 border-b-2 dark:border-[#9295A600] dark:text-[#9295A6] border-white text-[#232530] font-medium duration-500 flex items-center justify-center gap-x-1";
const buttonCategoryActive =
  "outline-none pb-4 md:pb-5 border-b-2 border-[#5367FF] text-[#5367FF] font-medium duration-500 flex items-center justify-center gap-x-1";
const searchBox = "flex items-center gap-x-1 px-2 xl:px-4 py-3 text-[#9295A6] border-b-2 md:border md:rounded-lg md:mb-6 xl:w-full xl:max-w-md dark:border-[#232530]"
const inputSearchBox = "outline-none px-2 text-[#232530] dark:text-[#f1f1f1] placeholder:text-[#9295A6] placeholder:text-sm w-full dark:bg-[#121318]"
const categoryBox = "flex justify-start gap-x-6 text-xs lg:text-sm lg:gap-x-8 overflow-scroll lg:overflow-hidden "
const titleInformation = 'flex justify-between mb-5 px-2 py-4  border-b dark:border-[#232530] text-[#9295A6] font-medium text-xs md:text-sm md:border-t-0'
// icons
const filterIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M11 19a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm10-2h-7.185A2.995 2.995 0 0 0 11 15a2.995 2.995 0 0 0-2.815 2H3a1 1 0 1 0 0 2h5.185A2.995 2.995 0 0 0 11 21a2.995 2.995 0 0 0 2.815-2H21a1 1 0 1 0 0-2Zm-2-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0-4a2.995 2.995 0 0 0-2.815 2H3a1 1 0 1 0 0 2h13.185A2.995 2.995 0 0 0 19 15c1.654 0 3-1.346 3-3s-1.346-3-3-3ZM7 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM3 7h1.185A2.995 2.995 0 0 0 7 9a2.995 2.995 0 0 0 2.815-2H21a1 1 0 1 0 0-2H9.815A2.995 2.995 0 0 0 7 3a2.995 2.995 0 0 0-2.815 2H3a1 1 0 1 0 0 2Z"
      clipRule="evenodd"
    />
  </svg>
);
const calenderIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M7 16c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1Zm5-1h4c.55 0 1 .45 1 1s-.45 1-1 1h-4c-.55 0-1-.45-1-1s.45-1 1-1Zm6 5H6c-.551 0-1-.449-1-1v-6h14v6c0 .551-.449 1-1 1ZM6 6h1v1c0 .55.45 1 1 1s1-.45 1-1V6h6v1c0 .55.45 1 1 1s1-.45 1-1V6h1c.551 0 1 .449 1 1v4H5V7c0-.551.449-1 1-1Zm12-2h-1V3c0-.55-.45-1-1-1s-1 .45-1 1v1H9V3c0-.55-.45-1-1-1s-1 .45-1 1v1H6C4.346 4 3 5.346 3 7v12c0 1.654 1.346 3 3 3h12c1.654 0 3-1.346 3-3V7c0-1.654-1.346-3-3-3Z"
      clipRule="evenodd"
    />
  </svg>
);
const searchIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none">
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M2 8c0-3.309 2.691-6 6-6s6 2.691 6 6-2.691 6-6 6-6-2.691-6-6Zm15.707 8.293-3.395-3.396A7.952 7.952 0 0 0 16 8c0-4.411-3.589-8-8-8S0 3.589 0 8s3.589 8 8 8a7.952 7.952 0 0 0 4.897-1.688l3.396 3.395a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414Z"
      clipRule="evenodd"
    />
  </svg>
);

const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const fetchAPI = async () => {
      const data = await getCoin();
      setCoins(data);
    };

    fetchAPI();
    document.title = "Market";
  }, []);

  const searchHandler = (event) => {
    setSearch(event.target.value);
  };

  const searchedCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  const priceChange24 = () => {
    searchedCoins.sort((a, b) => {
      if (a.price_change_percentage_24h > b.price_change_percentage_24h) {
        return -1;
      } else {
        return 0;
      }
    });
  };

  const high24 = () => {
    searchedCoins.sort((a, b) => {
      if (a.high_24h > b.high_24h) {
        return -1;
      } else {
        return 0;
      }
    });
  };

  const low24 = () => {
    searchedCoins.sort((a, b) => {
      if (a.low_24h > b.low_24h) {
        return -1;
      } else {
        return 0;
      }
    });
  };

  const topLoser = () => {
    searchedCoins.sort((a, b) => {
      if (a.current_price < b.current_price) {
        return -1;
      } else {
        return 0;
      }
    });
  };

  const marketCap = () => {
    searchedCoins.sort((a, b) => {
      if (a.market_cap > b.market_cap) {
        return -1;
      } else {
        return 0;
      }
    });
  };

  return (
    <div className="container max-w-screen-xl mx-auto px-4 py-[33px] bg-[#e6e9f2] md:bg-white dark:bg-[#080808]">
      <div className="bg-white dark:bg-[#121318] py-5 px-4 md:p-6 lg:p-8 xl:p-9 rounded-xl text-left flex justify-between gap-x-2 md:gap-x-10 text-[#232530] mb-8">
        <div>
          <h2 className="font-medium text-xl lg:text-2xl mb-2 lg:mb-3 dark:text-[#f1f1f1]">
            Cryptocurrency Prices by Market Cap
          </h2>
          <p className="text-sm lg:text-base text-[#6C7080] dark:text-[#9295A6]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus aspernatur nemo ea earum tempore libero.
          </p>
        </div>
        <div className="text-[#9295A6] flex pt-1 gap-x-3 md:gap-x-8">
          <span className="">{filterIcon}</span>
          <span className="">{calenderIcon}</span>
        </div>
      </div>

      <div className="bg-white dark:bg-[#121318] py-6 px-4 md:p-6 lg:p-8 xl:p-9 rounded-xl">
        <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
          <Tab.List>
            <div className="flex gap-y-7 flex-col md:flex-row-reverse md:justify-between md:items-center md:gap-x-2">
              {/* search box */}
              <div className={searchBox}>
                <span>{searchIcon}</span>
                <input
                  type="text"
                  placeholder="Search Coin Name"
                  value={search}
                  onChange={searchHandler}
                  className={inputSearchBox}
                />
              </div>

              {/* category */}
              <div className={categoryBox}>
                {/* Top Gainers */}
                <Tab as={Fragment}>
                  {({ selected }) => (
                    <button
                      className={
                        selected ? buttonCategoryActive : buttonCategory
                      }
                    >
                      <span>Top</span>
                      <span>Gainers</span>
                    </button>
                  )}
                </Tab>
                {/* Market cap change 24h */}
                <Tab as={Fragment}>
                  {({ selected }) => (
                    <button
                      className={
                        selected ? buttonCategoryActive : buttonCategory
                      }
                    >
                      <span>Change</span>
                      <span>24H</span>
                    </button>
                  )}
                </Tab>
                {/* High 24 */}
                <Tab as={Fragment}>
                  {({ selected }) => (
                    <button
                      className={
                        selected ? buttonCategoryActive : buttonCategory
                      }
                    >
                      <span>High</span>
                      <span>24H</span>
                    </button>
                  )}
                </Tab>
                {/* Low 24 */}
                <Tab as={Fragment}>
                  {({ selected }) => (
                    <button
                      className={
                        selected ? buttonCategoryActive : buttonCategory
                      }
                    >
                      <span>Low</span>
                      <span>24H</span>
                    </button>
                  )}
                </Tab>
                {/* Top Loser */}
                <Tab as={Fragment}>
                  {({ selected }) => (
                    <button
                      className={
                        selected ? buttonCategoryActive : buttonCategory
                      }
                    >
                      <span>Top</span>
                      <span>Loser</span>
                    </button>
                  )}
                </Tab>
                {/* Market Cap */}
                <Tab as={Fragment}>
                  {({ selected }) => (
                    <button
                      className={
                        selected ? buttonCategoryActive : buttonCategory
                      }
                    >
                      <span>Top</span>
                      <span>in</span>
                      <span>market</span>
                    </button>
                  )}
                </Tab>
              </div>
            </div>
             {/* title */}
             <div className={titleInformation}>
                <span>#Coin Name</span>
                <span>Coin Price</span>
                <span className="hidden md:block">24H</span>
                <span className="hidden md:block">Market Cap</span>
              </div>
          </Tab.List>

          <Tab.Panels>
            {/* Top Gainers */}
            <Tab.Panel>
              {coins.length ? (
                <div>
                  {searchedCoins.map((coin) => (
                    <Coin
                      key={coin.id}
                      name={coin.name}
                      image={coin.image}
                      symbol={coin.symbol}
                      price={coin.current_price}
                      marketCap={coin.market_cap}
                      priceChange={coin.price_change_percentage_24h}
                    />
                  ))}
                </div>
              ) : (
                <Loader />
              )}
            </Tab.Panel>
            {/* Market cap change 24h */}
            <Tab.Panel>
              {priceChange24()}
              {coins.length ? (
                <div>
                  {searchedCoins.map((coin) => (
                    <Coin
                      key={coin.id}
                      name={coin.name}
                      image={coin.image}
                      symbol={coin.symbol}
                      price={coin.current_price}
                      marketCap={coin.market_cap}
                      priceChange={coin.price_change_percentage_24h}
                    />
                  ))}
                </div>
              ) : (
                <Loader />
              )}
            </Tab.Panel>
            {/* Top 24h */}
            <Tab.Panel>
              {high24()}
              {coins.length ? (
                <div>
                  {searchedCoins.map((coin) => (
                    <Coin
                      key={coin.id}
                      name={coin.name}
                      image={coin.image}
                      symbol={coin.symbol}
                      price={coin.current_price}
                      marketCap={coin.market_cap}
                      priceChange={coin.price_change_percentage_24h}
                    />
                  ))}
                </div>
              ) : (
                <Loader />
              )}
            </Tab.Panel>
            {/* Low 24h */}
            <Tab.Panel>
              {low24()}
              {coins.length ? (
                <div>
                  {searchedCoins.map((coin) => (
                    <Coin
                      key={coin.id}
                      name={coin.name}
                      image={coin.image}
                      symbol={coin.symbol}
                      price={coin.current_price}
                      marketCap={coin.market_cap}
                      priceChange={coin.price_change_percentage_24h}
                    />
                  ))}
                </div>
              ) : (
                <Loader />
              )}
            </Tab.Panel>
            {/* Top Loser */}
            <Tab.Panel>
              {topLoser()}
              {coins.length ? (
                <div>
                  {searchedCoins.map((coin) => (
                    <Coin
                      key={coin.id}
                      name={coin.name}
                      image={coin.image}
                      symbol={coin.symbol}
                      price={coin.current_price}
                      marketCap={coin.market_cap}
                      priceChange={coin.price_change_percentage_24h}
                    />
                  ))}
                </div>
              ) : (
                <Loader />
              )}
            </Tab.Panel>
            {/* Market Cap */}
            <Tab.Panel>
              {marketCap()}
              {coins.length ? (
                <div>
                  {searchedCoins.map((coin) => (
                    <Coin
                      key={coin.id}
                      name={coin.name}
                      image={coin.image}
                      symbol={coin.symbol}
                      price={coin.current_price}
                      marketCap={coin.market_cap}
                      priceChange={coin.price_change_percentage_24h}
                    />
                  ))}
                </div>
              ) : (
                <Loader />
              )}
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};

export default Coins;
