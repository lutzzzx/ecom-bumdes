import React from "react";
import { NavLink, useLocation } from "react-router-dom";

function NavMenu() {
  const location = useLocation();

  return (
    <div className="nav-menu">
      <NavLink exact to="/" isActive={() => location.pathname === "/"}>
        Home
      </NavLink>
      <NavLink to="/product">Store</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </div>
  );
}

export default NavMenu;
