import React from "react";

const Main = () => {
  return (
    <main className="main bg-blue-400  py-40 flex">
      <div className="  pl-9">
        <div className="text-3xl">The Best Phones In The Town</div>
        <div className="pt-4 w-1/3">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
          est modi eius libero ex qui, illum reprehenderit cupiditate totam
          asperiores excepturi ea, porro quos vitae iusto. Non magnam id ea.
        </div>
        <div className="button">
          <button className=" w-32  h-7 bg-blue-800 my-4 mr-5 rounded-2xl text-white  hover:text-purple-800 hover:bg-white">
            Add phone
          </button>
          <button className=" w-32  h-7 bg-blue-800 my-4  rounded-2xl text-white  hover:text-purple-800 hover:bg-white">
            ContactUs
          </button>
        </div>
      </div>
      <div>
       <img src="\Tailwind + react\my-project\src\Components\bg.jpg" alt="" />
      </div>
    </main>
  );
};

export default Main;
