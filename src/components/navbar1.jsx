import React, { useState } from "react";
import Home from "./static/home.svg";
import Setting from "./static/setting.svg";
import Message from "./static/message.svg";
import Photos from "./static/photos.svg";
import Profile from "./static/profile.svg";
import "./navbar1.css";

const NavBar = () => {
  const [current, setCurrent] = useState(0);
  const listMap = [
    {
      component: <img src={Home} alt="Home"></img>,
      name: "Home",
    },
    {
      component: <img src={Profile} alt="Profile"></img>,
      name: "Profile",
    },
    {
      component: <img src={Message} alt="Message"></img>,
      name: "Message",
    },
    {
      component: <img src={Photos} alt="Photos"></img>,
      name: "Photos",
    },
    {
      component: <img src={Setting} alt="Setting"></img>,
      name: "Setting",
    },
  ];
  const handleClick = (index) => {
    setCurrent(index);
  };
  return (
    <div className="navigation">
      <ul>
        {listMap.map((item, index) => (
          <li
            className={`list ${index === current ? "active" : ""}`}
            onClick={() => handleClick(index)}
            key={index}
          >
            <a href="#javascript">
              <span className="icon">{item.component}</span>
              <span className="text">{item.name}</span>
            </a>
          </li>
        ))}
        <div className="indicator" style={{ "--left": current }}></div>
      </ul>
    </div>
  );
};

export default NavBar;
