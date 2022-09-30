import React from "react";
import img1 from "../images/laptop.PNG";
const slider = () => {
  return (
    <div className="container mx-auto  ">
      <div className="slider h-[29rem] flex flex-col-reverse md:flex-row md:bg-[#f2f2f2] bg-[#e6e6e6] md:ml-9 md:mr-9 mt-[15rem]  md:mt-0 ">
        <div className="left flex flex-col justify-center items-center md:items-baseline py-24 ml-12">
          <h1 className=" mx-6 font-medium text-xl md:text-3xl">
            Surface Laptop 4
          </h1>
          <p className="w-3/4 mx-6 text-center md:text-left">
            Do it all with a perfect balance of sleek,ultra thin
            design,multitaking speed and improved performance
          </p>
          <button className=" text-white bg-black ml-5 m-3 p-2 w-40">
            Shop No >{" "}
          </button>
        </div>
        <div className="right flex justify-center items-center ">
          <img className="md:w-[48rem] w-screen" src={img1} alt="A laptop " />
        </div>
      </div>
    </div>
  );
};

export default slider;
