import React, { useState } from "react";
import profile from "../../images/profile.png";
import { Link } from "react-router-dom";

// components
import NavbarButtons from './NavbarButtons'
import FooterSocialMedia from "./FooterSocialMedia";

// icons
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
const boltIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M6.871 12.8h5.13a1 1 0 0 1 .993 1.107l-.449 4.15L17.13 11.2H12a1 1 0 0 1-.994-1.107l.45-4.15L6.87 12.8Zm4.24 10.2a.998.998 0 0 1-.994-1.107l.77-7.093H5a1 1 0 0 1-.83-1.556l7.888-11.8a1 1 0 0 1 1.825.663L13.114 9.2H19a1.001 1.001 0 0 1 .831 1.556l-7.889 11.8a.998.998 0 0 1-.83.444Z"
      clipRule="evenodd"
    />
  </svg>
);
const chevronRight = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fillRule="evenodd" d="M10.5 17a.999.999 0 0 1-.707-1.707l3.305-3.305-3.18-3.293a1 1 0 0 1 1.439-1.39l3.862 4a1 1 0 0 1-.012 1.402l-4 4A.997.997 0 0 1 10.5 17Z" clipRule="evenodd"/></svg>
const saveIcon = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fillRule="evenodd" d="M11.821 15.506c.17 0 .34.043.492.129L17 18.285V5.335c0-.201-.12-.334-.2-.334H7.2c-.08 0-.2.133-.2.334v12.9l4.306-2.585c.16-.095.337-.143.515-.143ZM6.001 21a1 1 0 0 1-1-1V5.334C5 4.047 5.986 3 7.2 3h9.6C18.012 3 19 4.047 19 5.334V20a1 1 0 0 1-1.493.87l-5.672-3.207-5.322 3.195A1.006 1.006 0 0 1 6 21Z" clipRule="evenodd"/></svg>
const portfolioIcon = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fillRule="evenodd" d="M20 18c0 .551-.449 1-1 1h-2V9h2c.551 0 1 .449 1 1v8ZM4 18v-8c0-.551.449-1 1-1h2v10H5c-.551 0-1-.449-1-1Zm6-12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V7h-4V5.5ZM9 19h6V9H9v10ZM19 7h-3V5.5C16 4.122 14.878 3 13.5 3h-3A2.503 2.503 0 0 0 8 5.5V7H5c-1.654 0-3 1.346-3 3v8c0 1.654 1.346 3 3 3h14c1.654 0 3-1.346 3-3v-8c0-1.654-1.346-3-3-3Z" clipRule="evenodd"/></svg>
const walletIcon = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><mask id="a" width="20" height="20" x="2" y="1" maskUnits="userSpaceOnUse" styles="mask-type:alpha"><path fill="currentColor" fillRule="evenodd" d="M15.45 1.403A2 2 0 0 1 18 3.326V5h2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2h.027A2 2 0 0 1 2 18.674V6.754a2 2 0 0 1 1.45-1.923l12-3.428ZM10.14 19H20v-8h-2v4.246a2 2 0 0 1-1.45 1.923L10.14 19ZM18 7h2v2h-2V7ZM4 6.754v11.92l12-3.428V3.326L4 6.754ZM14 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" clipRule="evenodd"/></mask><g mask="url(#a)"><path fill="currentColor" d="M0 0h24v24H0z"/></g></svg>
const learnIcon = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fillRule="evenodd" d="M7 19c-.551 0-1-.449-1-1 0-.551.449-1 1-1h11v2H7ZM7 5h11v10H7c-.353 0-.686.072-1 .184V6c0-.551.449-1 1-1Zm12-2H7C5.346 3 4 4.346 4 6v12c0 1.654 1.346 3 3 3h12a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Z" clipRule="evenodd"/></svg>
const codeIcon = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="currentColor" fillRule="evenodd" d="m16.951 5.373 4.828 6a1 1 0 0 1-.01 1.268l-5 6a.998.998 0 0 1-1.41.128 1.003 1.003 0 0 1-.128-1.41l4.477-5.37-4.316-5.362a1 1 0 0 1 1.56-1.254Zm-9.72-.014A1.001 1.001 0 0 1 8.77 6.64l-4.477 5.37 4.316 5.363a1 1 0 0 1-1.56 1.254l-4.827-6a1 1 0 0 1 .01-1.268l5-6Z" clipRule="evenodd"/></svg>

// styles
const burgerBox = "flex flex-col items-end gap-y-1 duration-700 p-1";
const burger1 = "w-6 h-0.5 bg-[#232530] rounded-md duration-700";
const burger2 = " w-4 h-0.5 bg-[#232530] rounded-md duration-700";
const mobileMenu ="absolute top-[102px] left-0 right-0 h-screen bg-[#e6e9f2] overflow-scroll duration-700 px-4 py-6 pb-28";
const menuItemBox = 'flex items-center justify-between py-3.5 text-[#9295A6] '
const menuItemTitle = 'flex items-center gap-x-2'

const Hamburger = () => {
  const open = true;
  const [menu, setMenu] = useState(open);

  const openMenu = () => {
    setMenu(!menu);
  };

  return (
    <>
      <div className="flex items-center gap-x-4">
        <div className={menu ? "block m-2 text-[#232530]" : "hidden"}>{searchIcon}</div>
        <div
          className={menu ? burgerBox : `${burgerBox} absolute right-4 top-9`}
          onClick={openMenu}
        >
          <div
            className={menu ? burger1 : `${burger1} -rotate-45 translate-y-2.5`}
          ></div>
          <div
            className={menu ? burger2 : `${burger2} -rotate-45 opacity-0`}
          ></div>
          <div
            className={menu ? burger1 : `${burger1} rotate-45 -translate-y-0.5`}
          ></div>
          <div
            className={
              menu
                ? burger2
                : `${burger2} rotate-45 -translate-y-1.5 opacity-0 `
            }
          ></div>
        </div>
      </div>

      <div className={menu ? "hidden" : mobileMenu}>
        <div className="bg-white w-full rounded-xl p-5 mt-2 mb-10">
          {/* user */}
          <div className="flex w-full items-center gap-x-4 border-b pb-6">
            <img src={profile} alt="profile" />
            <div className="text-left text-[#232530]">
              <p className="font-medium text-sm">Allie Grater</p>
              <p className="text-sm font-light text-[#6C7080]">
                alliegrater1234@gmail.com
              </p>
            </div>
          </div>

          <div className="py-4 border-b mb-2">
            <Link to="/coins" onClick={openMenu} className={menuItemBox}>
              <div className={menuItemTitle}>
                <span>{boltIcon}</span>
                <span>Market</span>
              </div>
              <div>{chevronRight}</div>
            </Link>
            <div onClick={openMenu} className={menuItemBox}>
              <div className={menuItemTitle}>
                <span>{saveIcon}</span>
                <span>Watchlist</span>
              </div>
              <div>{chevronRight}</div>
            </div>
            <div onClick={openMenu} className={menuItemBox}>
              <div className={menuItemTitle}>
                <span>{portfolioIcon}</span>
                <span>Portfolio</span>
              </div>
              <div>{chevronRight}</div>
            </div>
            <div onClick={openMenu} className={menuItemBox}>
              <div className={menuItemTitle}>
                <span>{boltIcon}</span>
                <span>Trade History</span>
              </div>
              <div>{chevronRight}</div>
            </div>
            <div onClick={openMenu} className={menuItemBox}>
              <div className={menuItemTitle}>
                <span>{walletIcon}</span>
                <span>Wallet</span>
              </div>
              <div>{chevronRight}</div>
            </div>
            <div onClick={openMenu} className={menuItemBox}>
              <div className={menuItemTitle}>
                <span>{learnIcon}</span>
                <span>Learn</span>
              </div>
              <div>{chevronRight}</div>
            </div>
          </div>
          <Link to="/about" onClick={openMenu} className={`${menuItemBox} mb-4 pb-6 border-b`}>
              <div className={menuItemTitle}>
                <span>{codeIcon}</span>
                <span>About Project</span>
              </div>
              <div>{chevronRight}</div>
            </Link>
              
          <NavbarButtons />
        </div>

       <FooterSocialMedia />
      </div>
    </>
  );
};

export default Hamburger;
