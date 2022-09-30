import React from "react";
import img2 from "../images/micro.PNG";
import img1 from "../images/search.svg";
import img3 from "../images/cart.PNG";
import img4 from "../images/account.png";
const nav = () => {
  return (
    <div className="container mx-auto ">
      <div className="navbar flex justify-between items-center m-4 ">
        <div className="flex md:order-2">
          <div className="hamburger cursor-pointer md:hidden">
            <div className="line h-1 w-6 bg-black mt-1"></div>
            <div className="line h-1 w-6 bg-black mt-1"></div>
            <div className="line h-1 w-6 bg-black mt-1"></div>
          </div>
          <div className=" search ml-7 md:hidden w-6 ">
            <img  src={img1} alt="" />
          </div>
        </div>
        <div className="logo text-center md:order-1 flex">
          <div className=" md:mr-6 -m-7 md:pt-4 md:pl-12">
            <img  src={img2} alt="" />{" "}
          </div>
          <ul className="feachers absolute md:static inset-0 -translate-x-96 w-fit md:w-auto md:bg-white md:translate-x-0 md:flex md:space-x-6">
            <li>Microsoft 365</li>
            <li>Office</li>
            <li>Windows</li>
            <li>Surface</li>
            <li>Xbox</li>
            <li>Support</li>
          </ul>
        </div>
        <div className="card text-center md:order-3 flex md:pr-52">
          <p className="hidden md:block ">search</p>
          <div className="search ml-2 md:block hidden w-6 md:mr-1">
            <img className="" src={img1} alt="" />
          </div>
          <div className="carto md:-mr-[10.25rem] flex">
            <div className="w-7 flex mr-14 md:mr-20">
              <p className="md:ml-6 hidden md:block">Cart</p>
              <img className="ml-9 w-[1.25rem] md:w-[2rem] md:-ml-0 mr-10" src={img3} alt="" />
            </div>
            <div className=" account flex">
              <p className="hidden md:block md:mr-1">Sign in</p>
              <div>
                <img className="w-7 " src={img4} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default nav;
