import React, { useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [menu, setMenu] = useState(false);

  const navItems = [
    { id: 1, name: "Home", route: "/" },
    { id: 2, name: "Project", route: "/project" },
    { id: 3, name: "Service", route: "/service" },
    { id: 4, name: "Education", route: "/education" },
    { id: 5, name: "Resume", route: "/Resume" },
  ];

  return (
    <nav className="bg-white text-black py-3.5 shadow-2xl  ">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
        <NavLink to={"/"} className="flex items-center ">
          <img
            src="https://www.svgrepo.com/show/499962/music.svg"
            className="h-6 mr-3 sm:h-9"
            alt="Logo"
          />
          <span className="self-center sm:text-xl sm:font-semibold whitespace-nowrap  font-serif">
            Shivam Pandey
          </span>
        </NavLink>

        {/* Right Items */}
        <div className="flex items-center lg:order-2">
          <NavLink
            to="https://www.linkedin.com/in/shivam-pandey-80966b344"
            className="text-[25px]  duration-100 px-2">
            <FaLinkedinIn className="hover:scale-110" />
          </NavLink>
          <NavLink
            to="https://www.github.com/Shivam-75"
            className="text-[25px]  duration-100">
            <FaGithub className="hover:scale-110" />
          </NavLink>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setMenu(!menu)}
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4A1 1 0 013 5zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm1 4a1 1 0 000 2h12a1 1 0 100-2H4z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        {/* Menu Items */}
        <div
          className={`${
            menu ? "block" : "hidden"
          } w-full lg:flex items-center justify-between lg:w-auto lg:order-1`}>
          {navItems.map((item) => (
            <NavLink
              key={item.id}
              to={item.route}
              onClick={() => setMenu(!menu)}
              className={({ isActive }) =>
                `block py-2 pl-3 pr-2 rounded  md:mx-6 text-md font-semibold font-serif ${
                  isActive
                    ? "text-purple-700 font-bold underline underline-offset-4"
                    : "text-gray-700 hover:text-red-600 "
                }`
              }>
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
