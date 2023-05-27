import React from "react";
import { Link } from "react-router-dom";

const headerButton = "px-9 py-3 rounded-lg font-medium";

const NavarButtons = () => {
  return (
    <div className="flex items-center justify-between gap-x-4 pt-2">
      <Link to="/login" className={`${headerButton} bg-[#e9eaef] dark:bg-[#121318] text-[#5367FF]`}>
        Sign in
      </Link>
      <Link to="signup" className={`${headerButton} bg-[#5367FF] text-[#FFFFFF]`}>
        Register
      </Link>
    </div>
  );
};

export default NavarButtons;
