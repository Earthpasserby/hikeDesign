import { NavLink } from "react-router-dom";
import {Menu, X} from "lucide-react"

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
  return (
    <nav className="w-1/3">
      <div className="flex justify-between">
        <NavLinks />
      </div>
      <div>
          <button></button>
      </div>
    </nav>
  );
};
export default Nav;
