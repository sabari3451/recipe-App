import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-container">
                <h2 className="logo">Recipe Finder</h2>
                <div className="nav-links-container">
                    {" "}
                    {/* Separated styling */}
                    <Link to="/" className="nav-link">
                        Home
                    </Link>
                    <Link to="/favorites" className="nav-link">
                        Favorites
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
