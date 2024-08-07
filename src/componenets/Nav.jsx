import { NavLink } from "react-router-dom";
import {Menu, X} from "lucide-react"
import { useState } from "react";

const NavLinks = () => {
  return (
    <>
      <NavLink to="/">About us</NavLink>
      <NavLink to="/">Trails</NavLink>
      <NavLink to="/">Guides</NavLink>
      <NavLink to="/">Community</NavLink>
      <NavLink to="/">Blog</NavLink>
      <NavLink to="/">Login</NavLink>
      <NavLink to="/">
        <button>Getting started</button>
      </NavLink>
    </>
  );
};

const Nav = () => {
const [isOpen, setIsOpen] = useState(false);
const toggleNavbar = () => {
     setIsOpen(!isOpen);
};

  return (
    <nav className="w-1/3">
      <div className="hidden justify-between md:flex">
        <NavLinks />
      </div>
      <div className="md:hidden">
          <button onClick={toggleNavbar}>{isOpen ? <X/> : <Menu/>}</button>
      </div>
    </nav>
  );
};
export default Nav;
