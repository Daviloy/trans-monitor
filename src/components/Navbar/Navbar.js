import React from "react";
import "./Navbar.css";
import Search from "../Search/Search";
import NavLinks from "../NavLinks/NavLinks";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1 className="navbar__logo">TransMonitor</h1>
            <Search />
            <NavLinks />
        </nav>
    );
};

export default Navbar;
