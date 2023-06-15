import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import "../Navbar.css";

export default function SideBar(props) {
  const { isLogged, setIsLogged } = props;
  const [sidebar, setSidebar] = useState(false);

  const onLogout = () => {
    setIsLogged(false);
    localStorage.setItem("isLogin", false); // opetion
  };

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#FFF" }}>
        {/* All the icons now are white */}
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {!isLogged ? (
              <li>
                <NavLink to="/">Login</NavLink>
              </li>
            ) : (
              <li>
                <NavLink to="/" onClick={onLogout}>
                  Logout
                </NavLink>
              </li>
            )}
            <li>
              <NavLink to="/productlist">Productlist</NavLink>
            </li>
            <li>
              <NavLink to="/addtocart">addtocart</NavLink>
            </li>
            <li>
              <NavLink to="/register">Register</NavLink>
            </li>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}
