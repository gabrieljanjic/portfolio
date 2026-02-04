import { useState } from "react";
import navbarData from "../data/navbarData";
import { IoMenuOutline } from "react-icons/io5";

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <nav className="w-full flex flex-col sm:flex-row justify-between items-center py-2 sm:py-4">
      <div className="flex justify-between w-full items-center sm:px-0">
        <h2 className="text-white font-bold text-lg sm:text-xl">
          Gabriel Janjić
        </h2>
        <IoMenuOutline
          className="text-gray-200 text-2xl sm:hidden cursor-pointer"
          onClick={() => setOpen(!open)}
        />
      </div>
      <div
        className={`flex flex-col sm:flex-row gap-4 sm:gap-8 w-full sm:w-auto mt-4 sm:mt-0 px-4 sm:px-0 transition-all duration-200 ${
          open ? "flex" : "hidden sm:flex"
        }`}
      >
        {navbarData.map((item) => (
          <a
            key={item.id}
            href={item.path}
            className="text-[#a8adb2] w-full sm:w-auto sm:whitespace-nowrap text-center hover:text-white no-underline transition-colors duration-200 text-base"
          >
            {item.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
