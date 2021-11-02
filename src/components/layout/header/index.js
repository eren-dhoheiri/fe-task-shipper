import React, { useState } from "react";
import { ImageHolder } from "../../../assets";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

const Header = (props) => {
  const [user] = useState({
    name: "Shipper User",
    photo: ImageHolder,
  });

  return (
    <div className="main-header">
      <div className="main-header__left">
        <ButtonFold {...props} />
      </div>
      <div className="main-header__right">
        <div className="main-header__right__user">
          <span>
            Hello, &nbsp; <a href="/">{user.name}</a>
          </span>
          <img src={user.photo} alt="user" />
        </div>
      </div>
    </div>
  );
};

export default Header;

export const ButtonFold = ({ collapse, toggleSideBar }) => {
  return (
    <>
      <a
        href="/"
        onClick={(e) => {
          e.preventDefault();
          toggleSideBar(!collapse);
        }}
        className="toggle-sidebar toggle-sidebar-md"
        aria-label="menu-fold-unfold"
      >
        {!collapse ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />}
      </a>
      <a
        href="/"
        onClick={(e) => {
          e.preventDefault();
          toggleSideBar(true);
        }}
        className="toggle-sidebar toggle-sidebar-sm"
        aria-label="menu-fold-unfold"
      >
        <MenuUnfoldOutlined />
      </a>
    </>
  );
};
