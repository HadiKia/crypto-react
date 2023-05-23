import React from "react";
import { Link } from "react-router-dom";

//styles
const itemsStyles = "text-center text-sm lg:text-base text-[#9295A6] font-medium mb-4";

// icons
const instagramIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M16 2H8a6 6 0 0 0-6 6v8a6 6 0 0 0 6 6h8a6 6 0 0 0 6-6V8a6 6 0 0 0-6-6ZM4 8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8Zm8 9a5 5 0 1 1 0-10 5 5 0 0 1 0 10Zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm6-8a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
      clipRule="evenodd"
    />
  </svg>
);
const githubIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M16.24 22a1 1 0 0 1-1-1v-2.599c.047-.663-.152-1.24-.543-1.659a.999.999 0 0 1 .615-1.677C17.746 14.783 20 13.947 20 9.774c0-.8-.232-1.571-.67-2.227a2.762 2.762 0 0 1-.414-2.053 3.701 3.701 0 0 0-.012-1.419c-.404.12-1.096.405-2.093 1.099-.245.17-.556.221-.842.141a10.192 10.192 0 0 0-5.516 0c-.287.08-.596.029-.84-.141-.988-.687-1.676-.973-2.096-1.091a3.684 3.684 0 0 0-.01 1.408 2.823 2.823 0 0 1-.427 2.077 4 4 0 0 0-.657 2.229c0 3.894 1.88 4.933 4.7 5.296a1 1 0 0 1 .604 1.674 2.095 2.095 0 0 0-.547 1.567l.001.788a1.2 1.2 0 0 1 0 .12L11.182 21a1 1 0 1 1-2 0v-.571c-2.685.35-4.215-1.089-5.276-2.089-.44-.413-.854-.804-1.157-.883a1 1 0 1 1 .502-1.936c.8.208 1.395.769 2.026 1.363 1.022.963 1.992 1.875 3.905 1.52v-.003a3.918 3.918 0 0 1 .225-1.584c-2.054-.512-4.984-2.005-4.984-7.015a5.993 5.993 0 0 1 .987-3.335.833.833 0 0 0 .13-.613 5.688 5.688 0 0 1 .334-3.211c.114-.276.345-.487.63-.575.331-.102 1.551-.297 3.862 1.203a12.186 12.186 0 0 1 5.69 0c2.312-1.5 3.531-1.306 3.862-1.203.285.088.516.299.63.575a5.684 5.684 0 0 1 .335 3.215.78.78 0 0 0 .108.577 5.984 5.984 0 0 1 1.01 3.339c0 5.064-2.924 6.539-4.98 7.033.183.529.26 1.098.216 1.671L17.24 21a1 1 0 0 1-1 1Z"
      clipRule="evenodd"
    />
  </svg>
);
const linkedinIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M4 10h-.002L4 20h2V10H4Zm2 12H4c-1.103 0-2-.897-2-2V10c0-1.103.897-2 2-2h2c1.103 0 2 .897 2 2v10c0 1.103-.897 2-2 2Zm9.505-10.308c.153 0 .308.013.46.037 1.35.221 2.368 1.467 2.368 2.9V20H20v-5.462C20 12.036 17.982 10 15.5 10c-2.481 0-4.5 2.036-4.5 4.538V20h1.667v-5.462c0-.839.365-1.63 1.003-2.173a2.83 2.83 0 0 1 1.835-.673ZM20 22h-1.667c-1.102 0-2-.898-2-2v-5.37c0-.458-.303-.864-.688-.926a.82.82 0 0 0-.68.184.853.853 0 0 0-.298.65V20c0 1.102-.897 2-2 2H11c-1.102 0-2-.898-2-2v-5.462C9 10.932 11.916 8 15.5 8s6.5 2.932 6.5 6.538V20c0 1.102-.897 2-2 2ZM5 3a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm0 4C3.346 7 2 5.654 2 4s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3Z"
      clipRule="evenodd"
    />
  </svg>
);

const FooterSocialMedia = () => {
  return (
    <div className="md:flex items-center justify-between md:pb-3">
      <div className="md:flex items-center gap-x-5">
        <div className={itemsStyles}>
          &copy; 2023 dynamic. All rights reserved
        </div>
        <div className={`${itemsStyles} text-xs`}>
          <span className="px-4">Privacy</span>
          <span className="px-4 border-l border-[#9295A6]">Terms</span>
          <span className="px-4 border-l border-[#9295A6]">Sitemap</span>
        </div>
      </div>
      <div
        className={`${itemsStyles} flex items-center justify-center gap-x-4`}
      >
        <Link to="https://www.instagram.com/ihadikia">{instagramIcon}</Link>
        <Link to="https://github.com/HadiKia">{githubIcon}</Link>
        {linkedinIcon}
      </div>
    </div>
  );
};

export default FooterSocialMedia;
