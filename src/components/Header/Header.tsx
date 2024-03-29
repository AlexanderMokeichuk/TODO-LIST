import React from "react";
import NavBar from "../NavBar/NavBar";
import {Link} from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className={"bg-success position-fixed w-100 z-3"}>
      <div className={"container d-flex align-items-center justify-content-between"}>
        <Link to={"/"} className={"nav-link"}>Todo_List</Link>
        <NavBar/>
      </div>
    </header>
  );
};

export default Header;