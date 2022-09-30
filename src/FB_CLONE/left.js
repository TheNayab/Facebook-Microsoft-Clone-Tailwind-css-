import React from "react";
import img1 from "../images/fb.png";
const left = () => {
  return (
    <div className="md:flex  ">
      <div className="left mr-20">
        <img
          className=" mx-auto w-28 sm:w-28 sm:mr-auto sm:ml-auto md:w-80 md:ml-96 md:pl-16 md:mt-44  "
          src={img1}
          alt=""
        />
        <p className="hidden sm:hidden md:block  ml-80 pl-32 text-3xl ">
          Facebook helps you connect and share
        </p>
        <span className="hidden sm:hidden md:block  ml-80 pl-32 text-3xl">
          with the people in your life.
        </span>
      </div>
      <div className=" right relative md:mt-32  md:bg-white  md:h-96  md:rounded-lg   md:border-2  md:border-slate-300 ">
        <div className=" w-max mx-auto mt-3">
          <input
            className="outline-blue-500 border border-1 h-14 w-96 pl-2 bg-slate-100 md:m-3  md:bg-white  border-slate-300  rounded-lg"
            type="text"
            placeholder="Email address or phone number"
          />
        </div>
        <div className=" w-max mx-auto mt-2">
          <input
            className="outline-blue-500 border border-1 h-14 w-96 pl-2 bg-slate-100 md:-mt-2  md:bg-white  border-slate-300  rounded-lg"
            type="text"
            placeholder="Password"
          />
        </div>{" "}
        <div className=" w-max mx-auto mt-3">
          <button className="cursor-pointer rounded-md h-10 w-96 pl-2 bg-blue-600 text-white md:h-14  md:text-xl  hover:bg-blue-700 ">
            <b>Log In</b>
          </button>
        </div>
        <span className=" text-blue-600 flex justify-center mt-3 mb-5 text-sm hover:underline cursor-pointer">
          Forgotten password?
        </span>
        <hr className=" flex mx-auto w-96 border border-1" />
        <div className="w-max mx-auto mt-8">
          <button className="cursor-pointer md:rounded-lg   text-sm bg-green-600  h-8 w-36 rounded-sm text-white  md:h-12  md:w-52  ">
            <b> Create New Account</b>
          </button>
        </div>
        <span className=" hidden md:block  absolute -bottom-12 text-md left-14">
          <b className="hover:underline cursor-pointer">Create a Page </b>for a
          celebrity, brand or business.
        </span>
      </div>
    </div>
  );
};

export default left;
