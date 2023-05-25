import React, { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

// Functions
import { validate } from "../helper/validate";
import { notify } from "../helper/toast";

//images
import googleIcon from "../images/google.svg";
import appleIcon from "../images/apple.svg";
import metaIcon from "../images/meta.svg";

// Style
// Style
const formStyle =
  "bg-white py-7 px-6 md:p-6 lg:p-8 xl:p-9 rounded-xl text-left text-[#232530] md:max-w-md";
const formField = "flex flex-col gap-y-1 mb-8";
const formFieldInput =
  "flex align-center gap-x-3 px-2 py-3 border-b border-[#5367FF]";
const errorText = "text-red-400 h-2 text-sm px-2";
const inputIcon = "text-[#5367FF]";
const inputIconUncompleted = "text-red-400";
const formInput =
  "placeholder:text-[#9295A6] placeholder:text-sm text-sm outline-none";
const submitButton =
  "w-full text-center bg-[#5367FF] text-white font-medium py-3 rounded-md active:scale-90 duration-700 mb-9";
const checkBoxSpan = "text-[#5367FF] ";
const formPagesLink =
  "text-center px-4 text-sm text-[#545766] font-medium mb-8";

// Icons
const emailIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none">
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M8.833 10.098a2.281 2.281 0 0 1-1.42-.497L4.047 6.89a.563.563 0 0 1 .706-.876l3.361 2.71a1.158 1.158 0 0 0 1.442-.004l3.327-2.704a.562.562 0 1 1 .71.873l-3.332 2.709a2.294 2.294 0 0 1-1.43.502Z"
      clipRule="evenodd"
    />
    <mask
      id="a"
      width="17"
      height="16"
      x="0"
      y="1"
      maskUnits="userSpaceOnUse"
      styles="mask-type:luminance"
    >
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M.75 1.5h16.125v14.625H.75V1.5Z"
        clipRule="evenodd"
      />
    </mask>
    <g mask="url(#a)">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.13 15h7.364c.002-.002.008 0 .012 0 .856 0 1.615-.306 2.197-.887.676-.673 1.047-1.64 1.047-2.722V6.24c0-2.095-1.37-3.615-3.256-3.615H5.131c-1.887 0-3.256 1.52-3.256 3.615v5.151c0 1.082.372 2.049 1.047 2.722.582.581 1.342.887 2.197.887h.01Zm-.014 1.125c-1.157 0-2.19-.42-2.988-1.215-.89-.886-1.378-2.136-1.378-3.519V6.24c0-2.702 1.883-4.74 4.38-4.74h7.364c2.498 0 4.38 2.038 4.38 4.74v5.151c0 1.383-.488 2.633-1.377 3.519-.797.794-1.831 1.215-2.99 1.215H5.115Z"
        clipRule="evenodd"
      />
    </g>
  </svg>
);
const passwordIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="19" fill="none">
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M11.72 7.43a.68.68 0 0 1-.68-.68V4.81c0-1.9-1.55-3.45-3.45-3.45h-.01A3.42 3.42 0 0 0 4.13 4.8v1.96a.68.68 0 0 1-1.36 0V4.81A4.79 4.79 0 0 1 7.59 0c2.65 0 4.8 2.15 4.8 4.8v1.94c0 .38-.3.68-.67.68Z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M4.12 7.37a2.76 2.76 0 0 0-2.76 2.76v3.89a2.76 2.76 0 0 0 2.76 2.75h6.93a2.76 2.76 0 0 0 2.75-2.75v-3.9a2.76 2.76 0 0 0-2.75-2.75H4.12Zm6.93 10.76H4.12A4.12 4.12 0 0 1 0 14.02v-3.9a4.12 4.12 0 0 1 4.12-4.11h6.93a4.12 4.12 0 0 1 4.11 4.12v3.89a4.12 4.12 0 0 1-4.11 4.11Z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M7.58 13.76a.68.68 0 0 1-.68-.68v-2.01a.68.68 0 0 1 1.36 0v2c0 .38-.3.69-.68.69Z"
      clipRule="evenodd"
    />
  </svg>
);

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  useEffect(() => {
    setErrors(validate(data, "login"));
    document.title = "Log in";
  }, [data, touched]);

  const changeHandler = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const focusHandler = (event) => {
    setTouched({ ...touched, [event.target.name]: true });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (!Object.keys(errors).length) {
      notify("You Logged in successfully!", "success");
    } else {
      notify("Invalid data!", "error");
      setTouched({
        email: true,
        password: true,
      });
    }
  };

  return (
    <div className="bg-[#e6e9f2]">
    <div className="container max-w-screen-xl mx-auto px-4 py-8 flex justify-center">
      <form onSubmit={submitHandler} className={formStyle}>
        <h2 className="text-2xl font-medium mb-8">Sign In to Dynamic</h2>

        {/* email */}
        <div className={formField}>
          <div className={formFieldInput}>
            <div
              className={
                errors.email && touched.email ? inputIconUncompleted : inputIcon
              }
            >
              {emailIcon}
            </div>
            <input
              className={formInput}
              type="text"
              name="email"
              placeholder="Email address"
              value={data.email}
              onChange={changeHandler}
              onFocus={focusHandler}
            />
          </div>
          {errors.email && touched.email && (
            <span className={errorText}>{errors.email}</span>
          )}
        </div>
        {/* password */}
        <div className={formField}>
          <div className={formFieldInput}>
            <div
              className={
                errors.password && touched.password
                  ? inputIconUncompleted
                  : inputIcon
              }
            >
              {passwordIcon}
            </div>
            <input
              className={formInput}
              type="password"
              name="password"
              placeholder="Password"
              value={data.password}
              onChange={changeHandler}
              onFocus={focusHandler}
            />
          </div>
          {errors.password && touched.password && (
            <span className={errorText}>{errors.password}</span>
          )}
        </div>
        {/* submit button */}
        <button type="submit" className={submitButton}>
          Register
        </button>
        <p className={formPagesLink}>
          If you don't have an account you can{" "}
          <Link to="/signup" className={checkBoxSpan}>
            Register Here!
          </Link>
        </p>

        <div className="flex items-center text-[#9295A6] font-medium text-sm gap-x-5 mb-6">
          <span className="flex-1 h-[1px] bg-[#9295A6]"></span>
          <span>or continue with</span>
          <span className="flex-1 h-[1px] bg-[#9295A6]"></span>
        </div>

        <div className="flex items-center justify-center gap-x-6 mb-3">
          <div className="w-10 cursor-pointer flex items-center">
            <img src={googleIcon} alt="logo" />
          </div>
          <div className="w-10 cursor-pointer flex items-center">
            <img src={appleIcon} alt="logo" />
          </div>
          <div className="w-10 cursor-pointer flex items-center">
            <img src={metaIcon} alt="logo" />
          </div>
        </div>
      </form>

      <ToastContainer />
    </div>
    </div>
  );
};

export default Login;
