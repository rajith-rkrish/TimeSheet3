import React, { useState } from "react";
import "../NavbarAnim/navAnim.css";
import Dash from "../AdminNavbar/DASHBOARD.svg";
import humburger from "../AdminNavbar/hamburger.svg";
import project from "../AdminNavbar/PROJECTS.svg";
import reports from "../AdminNavbar/REPORTS.svg";
import Setting from "../AdminNavbar/settings.svg";
import team from "../AdminNavbar/TEAM.svg";
import Jkl from "../AdminNavbar/JK Lucent.svg";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
function NavAnime({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const menuitem = [
    {
      path: "/Admin/Dash",
      name: "Dashboard",
      icons: Dash,
    },

    {
      path: "/Admin/Reports",
      name: "Reports",
      icons: reports,
    },
    {
      path: "/Admin/Project",
      name: "Projects",
      icons: project,
    },
    {
      path: "/Admin/Team",
      name: "Team",
      icons: team,
    },
    {
      path: "/Admin/Settings",
      name: "Settings",
      icons: Setting,
    },
  ];

  return (
    <>
      <div className="container1">
        <div style={{ width: isOpen ? "185px" : "50px" }} className="sidebar">
          <div className="top_section">
            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
            <img
              src={Jkl}
              alt="jkl"
              style={{ display: isOpen ? "block" : "none" }}
              className="logo"
            />
          </div>
          {menuitem.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className="link"
              activeclassName="active"
            >
              <img className="icon" src={item.icons} alt="item" />
              <div
                style={{ display: isOpen ? "block" : "none" }}
                className="link_text"
              >
                {item.name}
              </div>
            </NavLink>
          ))}
        </div>
        <main>{children}</main>
      </div>
    </>
  );
}

export default NavAnime;
