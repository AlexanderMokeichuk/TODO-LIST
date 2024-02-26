import React from "react";
import NavBar from "../NavBar/NavBar";
import {Link} from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header>
      <div className={"container d-flex align-items-center justify-content-between"}>
        <Link to={"/"} className={"nav-link"}>TODO</Link>
        <NavBar/>
      </div>
    </header>
  );
};

export default Header;