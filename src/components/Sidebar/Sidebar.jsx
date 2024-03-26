import React from "react";
import "./Sidebar.css";
import Logo from "./../../assets/Branding.png";
import dashboardLogo from "./../../assets/Stats.png";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { GoMail, GoFileDirectory } from "react-icons/go";
import { IoPersonOutline } from "react-icons/io5";
import { AiOutlineAppstore } from "react-icons/ai";
import { TbBallFootball } from "react-icons/tb";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { IoExitOutline } from "react-icons/io5";
import { TbWorld } from "react-icons/tb";

const Sidebar = () => {
  return (
    <aside className="sidebar-container">
      <div className="logo-container">
        <img className="clonify-logo" src={Logo} alt="Clonify-logo" />
      </div>

      <div className="dashboard-container">
        <h2 className="dashboard-title">DASHBOARD</h2>

        <div className="dashboard-main-container">
          <div className="dashboard">
            <div className="dashboard-logo-title-conatiner">
              <img
                className="dashboard-logo"
                src={dashboardLogo}
                alt="dashboard-logo"
              />
              <h3 className="dashboard-logo-title">Dashboard</h3>
            </div>

            <IoIosArrowUp className="dashboard-icon" />
          </div>
          <div className="dashboard-details-container">
            <ul className="dashboard-details">
              <li className="analytics">Analytics</li>
              <li className="list">Finance</li>
              <li className="list">Job Board</li>
            </ul>
          </div>

          <div className="message-container">
            <div className="dashboard-logo-title-conatiner">
              <GoMail
                className="message-logo"
                src={dashboardLogo}
                alt="Message-logo"
              />
              <h3 className="message-title">Message</h3>
            </div>

            <IoIosArrowDown className="messagedown-icon" />
          </div>

          <div className="message-container">
            <div className="dashboard-logo-title-conatiner">
              <IoPersonOutline
                className="message-logo"
                src={dashboardLogo}
                alt="Message-logo"
              />
              <h3 className="message-title">Friends</h3>
            </div>

            <IoIosArrowDown className="messagedown-icon" />
          </div>
          <div className="message-container">
            <div className="dashboard-logo-title-conatiner">
              <AiOutlineAppstore
                className="message-logo"
                src={dashboardLogo}
                alt="Message-logo"
              />
              <h3 className="message-title">Apps</h3>
            </div>

            <IoIosArrowDown className="messagedown-icon" />
          </div>
        </div>

        <div className="pages-container">
          <h2 className="dashboard-title">PAGES</h2>

          <div className="message-container">
            <div className="dashboard-logo-title-conatiner">
              <TbBallFootball
                className="message-logo"
                src={dashboardLogo}
                alt="Message-logo"
              />
              <h3 className="message-title">Help Center</h3>
            </div>

            <IoIosArrowDown className="messagedown-icon" />
          </div>

          <div className="message-container">
            <div className="dashboard-logo-title-conatiner">
              <GoFileDirectory
                className="message-logo"
                src={dashboardLogo}
                alt="Message-logo"
              />
              <h3 className="message-title">File Manager</h3>
            </div>

            <IoIosArrowDown className="messagedown-icon" />
          </div>
        </div>

        <div className="sidebar-bottom-container">
          <HiOutlineAdjustmentsHorizontal className="sidebar-bottom-icon" />
          <IoExitOutline className="sidebar-bottom-icon" />
          <TbWorld className="sidebar-bottom-icon" />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
