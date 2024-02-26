import React from "react";
import {NavLink} from "react-router-dom";

const NavBar: React.FC = () => {
  return (
    <nav className={"navbar navbar-expand"}>
      <ul className={"navbar-nav"}>
        <li className={"nav-item"}>
          <NavLink to={"/"} className={"nav-link"}>Home</NavLink>
        </li>
        <li className={"nav-item"}>
          <NavLink to={"new-task"} className={"nav-link"}>Add Task</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;