import React from 'react';
import { Link } from "react-scroll";
import '../styles/header.css';

const Header = () => {

  const NavLink = ({ id, label }) => (
    <Link
      to={id}
      smooth={true}
      duration={100}
      offset={-80}
      className="cursor-pointer"
    >
      <div className="nav-link">{label}</div>
    </Link>
  );

  return (
    <div className="">
      <nav className="nav col-12">
        <NavLink id="home" label="Home" />
        <NavLink id="projects" label="Projects" />
        <NavLink id="about" label="About" />
        <NavLink id="contact" label="Contact" />
      </nav>
   </div>
  )
};

export default Header;