import React from "react";

const Nav = () => {
  return (
    <nav className="py-4 bg-blue-800 flex justify-between">
<b className="text-white mx-16">PhonesMart</b> 
      <ul className="mx-16 flex text-white justify-end space-x-16">
        <li className="mx-4 px-4 cursor-pointer hover:bg-white hover:text-blue-900 hover:border-2 hover:border-blue-400 hover:rounded-2xl ">Home</li>
        <li className="mx-4 px-4 cursor-pointer hover:bg-white hover:text-blue-900 hover:border-2 hover:border-blue-400 hover:rounded-2xl ">About</li>
        <li className="mx-4 px-4 cursor-pointer hover:bg-white hover:text-blue-900 hover:border-2 hover:border-blue-400 hover:rounded-2xl ">Catalogue</li>
        <li className="mx-4 px-4 cursor-pointer hover:bg-white hover:text-blue-900 hover:border-2 hover:border-blue-400 hover:rounded-2xl ">Contact</li>
      </ul>
    </nav>
  );
};

export default Nav;
