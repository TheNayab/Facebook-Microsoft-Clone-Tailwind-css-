import React from "react";
import img1 from "../images/m1.PNG";
import img2 from "../images/m2.PNG";
import img3 from "../images/m3.PNG";
const promo = () => {
  return (
    <div className="container ml-3  mt-6  md:flex md:justify-center md:mx-auto">
      <div className="flex md:block">
        <img className="ml-1 w-[4rem] md:ml-6 mt-5 md:w-[6rem]" src={img1} alt="" />
        <p className="md:w-[75%] mt-9  font-medium md:-mt-1 text-center">
          Choose your microsoft 365
        </p>
      </div>
      <div className="flex md:block md:ml-5">
        <img className="w-[3.5rem]  md:mt-7 ml-3 mt-2 md:w-[5rem] " src={img2} alt="" />
        <p className="md:w-[75%] md:-mt-0 mt-5 ml-0 font-medium  text-center">Explore surface devices</p>
    
      </div>
      <div className=" flex md:block md:ml-5">
        <img className="w-[3.5rem] md:mt-5 ml-2 mt-2 md:w-[5rem] " src={img3} alt="" />
        <p className="md:w-[75%] md:-mt-0 mt-5 ml-1 font-medium text-center">Buy Xbox games</p>
      </div>
      <div className="flex md:block md:ml-10">
        <img className="w-[4rem] ml-1 mt-0 md:mt-6 md:w-[6rem]" src={img1} alt="" />
        <p className=" mt-5 md:-mt-1 font-medium text-center">Get Windows 11</p>
      </div>
    </div>
  );
};

export default promo;
