import React, { useState } from "react";
import "./Sidebar.scss";
import { HiMenuAlt3 } from "react-icons/hi";
import { GiTronArrow } from "react-icons/gi";
import menu from "../../data/sidebar";
import SidebarItem from "./SidebarItem";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <div className="layout">
      <div className="sidebar" style={{ width: isOpen ? "330px" : "80px" }}>
        <div className="top_section">
          <div className="logo" style={{ display: isOpen ? "block" : "none" }}>
            <GiTronArrow
              size={26}
              style={{ cursor: "pointer" , marginLeft: "3px" , marginTop: "15px" ,color: "#CCAF31"  }}
              onClick={goHome}
            />
            <span  style={{ fontSize: "26px", marginLeft: "10px" , marginTop: "10px" ,color: "#CCAF31"  , fontFamily:"Trebuchet MS" , textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)" }} onClick={goHome}>Arrow Computers</span>
          </div>

          <div
            className="bars"
            style={{ marginLeft: isOpen ? "34px" : "0px", marginTop: "13px" }}
          >
            <HiMenuAlt3 onClick={toggle} />
          </div>
        </div>
        {menu.map((item, index) => {
          return <SidebarItem key={index} item={item} isOpen={isOpen} />;
        })}
      </div>

      <main
        style={{
          paddingLeft: isOpen ? "330px" : "80px",
          transition: "all .5s",
        }}
      >
        {children}
      </main>
    </div>
  );
};

export default Sidebar;
