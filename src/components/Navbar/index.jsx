import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaReact } from "react-icons/fa";
import { HiX } from "react-icons/hi";

const Navbar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);

  const handleToggleIcon = () => setToggleIcon(!toggleIcon);
  const handleLinkClick = () => setToggleIcon(false);

  const data = [
    { label: "Inicio", to: "/" },
    { label: "Sobre mí", to: "/about" },
    { label: "Proyectos", to: "/projects" },
    { label: "Contacto", to: "/contact" }
  ];

  return (
    <nav className="navbar">
      <div className="navbar_container">
        <Link to="/" className="navbar_container_logo">
          <FaReact size={30} />
        </Link>

        <div className="nav_icon" onClick={handleToggleIcon}>
          {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
        </div>
      </div>

      <ul className={`navbar_container_menu ${toggleIcon ? "active" : ""}`}>
        {data.map((item) => (
          <li key={item.label} className="navbar_container_menu_item">
            <Link
              className="navbar_container_menu_item_links"
              to={item.to}
              onClick={handleLinkClick}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
