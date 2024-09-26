import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  return (
    <div className="flex text-lg  justify-between items-center px-4 md:px-0 max-w-[1300px] mx-auto h-24 ">
      <h1 className="text-3xl font-bold m-4">ELAROUSSI Fatima</h1>
      <ul className="hidden md:flex">
        <li className="p-5">
          <Link to="about">About</Link>
          {/* <span className="absolute bottom-0 left-0 w-full h-1 bg-sky-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span> */}
        </li>
        <li className="p-5">
          <Link to="experience">Experience</Link>
          {/* <span className="absolute bottom-0 left-0 w-full h-1 bg-sky-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span> */}
        </li>
        <li className="p-5">
          <Link to="contact" className="px-4 py-2 rounded-xl bg-primary-color">
            Contact
          </Link>
          {/* <span className="absolute bottom-0 left-0 w-full h-1 bg-sky-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span> */}
        </li>
      </ul>

      <div onClick={handleNav} className="block md:hidden z-40">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div
        className={nav?" text-gray-300 z-40 fixed h-full w-[60%] left-0 top-0 bg-[#171717] border-r border-r-gray-900 ease-in-out duration-500 "
        :'fixed left-[-100%]'}
      >
        <ul className="p-8 text-2xl ">
          <li className="p-5">
            <Link to="about">About</Link>
            {/* <span className="absolute bottom-0 left-0 w-full h-1 bg-sky-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span> */}
          </li>
          <li className="p-5">
            <Link to="experience">Experience</Link>
            {/* <span className="absolute bottom-0 left-0 w-full h-1 bg-sky-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span> */}
          </li>
          <li className="p-5">
            <Link to="contact" className="px-4 py-2 rounded-xl bg-primary-color">
              Contact
            </Link>
            {/* <span className="absolute bottom-0 left-0 w-full h-1 bg-sky-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span> */}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
