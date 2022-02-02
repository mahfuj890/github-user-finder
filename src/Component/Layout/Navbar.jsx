import React from "react";
import PropTypes from "prop-types";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = ({ title }) => {
  return (
    <nav className="navbar mb-12 shadow-lg bg-neutral text-neutral-content">
      <div className="container mx-auto">
        <div className="flex-none px-2 mx-2">
          <Link to="/" className="d-flex">
            <FaGithub className="inline pr-2 text-3xl" />
            <h3 className="text-lg font-bold inline">{title}</h3>
          </Link>
        </div>
        <div className="flex-1 px-2 mx-2">
            <div className="flex justify-end">
                <Link to='/' className="btn btn-ghost btn-sm rounded-btn">
                Home</Link>
                <Link to='/about' className="btn btn-ghost btn-sm rounded-btn">
                About</Link>
            </div>
        </div>
      </div>
    </nav>
  );
};

Navbar.defaultProps = {
  title: "Github Finder",
};

Navbar.propTypes = {
    title:PropTypes.string
};

export default Navbar;
