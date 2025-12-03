import { useState } from "react";
import navbarData from "../data/navbarData";
import { IoMenuOutline } from "react-icons/io5";

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <nav className="w-full d-flex justify-content-between py-4">
      <div
        className="d-flex justify-content-between w-100"
        id="name-button-nav"
      >
        <h2 className="text-white fw-bold fs-5">Gabriel Janjić</h2>
        <IoMenuOutline
          className="almost-white fs-3"
          id="menu-icon"
          onClick={() => setOpen(!open)}
        />
      </div>
      <div
        className={`d-flex justify-content-between gap-4 fs-6 ${
          open ? "show-mobile-menu" : ""
        }`}
        id="navbar-links"
      >
        {navbarData.map((item) => {
          return (
            <a key={item.id} className="link almost-white" href={item.path}>
              {item.name}
            </a>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
