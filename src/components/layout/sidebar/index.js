import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  MenuFoldOutlined,
  HomeOutlined,
  CarOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import { ShipperIcon, ShipperLogo } from "../../../assets";

const Sidebar = ({ collapse, toggleSideBar, location }) => {
  const Nav = [
    { title: "Beranda", icon: <HomeOutlined />, link: "/", active: false },

    {
      title: "Driver",
      icon: <CarOutlined />,
      link: "/driver-management",
      active: false,
    },
    {
      title: "Pickup",
      icon: <CalendarOutlined />,
      link: "/pickup",
      active: false,
    },
  ];
  const [navMenu, setNavMenu] = useState(Nav);

  useEffect(() => {
    let nav = navMenu.map((v) => {
      v.active = location.pathname === v.link;
      return v;
    });
    setNavMenu(nav);
  }, [location, navMenu]);

  return (
    <div className={`main-sidebar ${collapse ? "collapse" : ""}`}>
      <div className="main-sidebar__logo">
        <img
          className="main-sidebar__logo__mobile"
          src={ShipperLogo}
          alt="shipper-logo"
        />
        <img
          className="main-sidebar__logo__desktop"
          src={!collapse ? ShipperLogo : ShipperIcon}
          alt="shipper-logo"
        />
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            toggleSideBar(!collapse);
          }}
          aria-label="menu-fold-unfold"
        >
          <MenuFoldOutlined />
        </a>
      </div>
      <div className="main-sidebar__nav">
        {navMenu.map((v, k) => (
          <NavItem key={k} {...v} />
        ))}
      </div>
    </div>
  );
};

export const NavItem = ({ title, icon, link, active }) => (
  <div className={`main-sidebar__nav__item ${active ? "active" : ""}`}>
    <Link to={link} className="main-sidebar__nav__item__link">
      <div className="main-sidebar__nav__item__container">
        <span className="main-sidebar__nav__item__link__icon">{icon}</span>
        <span className="main-sidebar__nav__item__link__title">{title}</span>
      </div>
    </Link>
  </div>
);

export default Sidebar;
