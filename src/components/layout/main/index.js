import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "../sidebar";
import Header from "../header";

const Main = ({ children }) => {
  const location = useLocation();
  const [collapse, setCollapse] = useState(initCollapse());
  const [windowWidth, setWindowWidth] = useState(0);

  const toggleSideBar = (val) => {
    setCollapse(val);
    localStorage.setItem("collapse", val);
  };

  const sideBarProps = {
    collapse,
    toggleSideBar,
    location,
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth <= 600) toggleSideBar(false);
    });
    return () => null;
  }, [windowWidth]);

  return (
    <div className="main-layout">
      <Sidebar {...sideBarProps} />
      <div className="main-container">
        <Header {...sideBarProps} />
        {children}
      </div>
    </div>
  );
};

export default Main;

function initCollapse() {
  let collapse = false;
  if (window.innerWidth > 600) {
    if (localStorage.getItem("collapse") === "true") collapse = true;
  }
  return collapse;
}
