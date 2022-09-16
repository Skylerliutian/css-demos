import React from "react";
import Home from "./static/home.svg";
import Setting from "./static/setting.svg";
import Message from "./static/message.svg";
import Photo from "./static/photos.svg";
import Profile from "./static/profile.svg";
import "./navbar1.css";

const NavBar = () => {
  const listMap = [
    {
      component: <img src={Home} alt="home"></img>,
      name: "Home",
    },
  ];
  return (
    <div className="navigation">
      <ul>
        <li className="list">
          <a href="#javascript">
            <span className="icon"></span>
            <span className="text">Home</span>
          </a>
        </li>
        <li className="list">
          <a href="#javascript">
            <span className="icon">
              <img src={Profile} alt="Profile"></img>
            </span>
            <span className="text">Profile</span>
          </a>
        </li>
        <li className="list">
          <a href="#javascript">
            <span className="icon">
              <img src={Message} alt="Message"></img>
            </span>
            <span className="text">Message</span>
          </a>
        </li>
        <li className="list">
          <a href="#javascript">
            <span className="icon">
              <img src={Photo} alt="Photos"></img>
            </span>
            <span className="text">Photos</span>
          </a>
        </li>
        <li className="list">
          <a href="#javascript">
            <span className="icon">
              <img src={Setting} alt="setting"></img>
            </span>
            <span className="text">Setting</span>
          </a>
        </li>
        <div className="indicator"></div>
      </ul>
    </div>
  );
};

export default NavBar;
