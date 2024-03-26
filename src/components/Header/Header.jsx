import React from "react";
import "./Header.css";
import { CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiCalendar } from "react-icons/ci";
import { AiOutlineAppstore } from "react-icons/ai";
import profileImg from "./../../assets/Pasteimage.png";
import Logo from "./../../assets/Branding.png";

const Header = () => {
  return (
    <>
      <header className="header-container">
        <div className="input-container">
          <CiSearch className="search-icon" />
          <input className="search-input" type="text" placeholder="Search..." />
        </div>

        <div className="header-right-container">
          <div className="header-right-icon-container">
            <div className="notification-container">
              <IoIosNotificationsOutline className="header-right-icon" />
              <div className="notification-icon"></div>
            </div>
            <div className="notification-container">
              <CiCalendar className="header-right-icon" />
              <AiOutlineAppstore className="header-right-icon" />
            </div>
          </div>
          <div className="header-right-profile-container">
            <img className="profile-image" src={profileImg} alt="profile-img" />
            <div className="notification-profile-icon"></div>
          </div>
        </div>
      </header>
      <header className="header-mobile-container">
        <div className="header-mobile-details-container">
          <div className="clonify-logo-container">
            <img
              className="clonify-logo-header"
              src={Logo}
              alt="Clonify-logo"
            />
          </div>
          <div className="header-right-profile-container">
            <img className="profile-image" src={profileImg} alt="profile-img" />
            <div className="notification-profile-icon"></div>
          </div>
        </div>
        <div className="input-mobile-container">
          <CiSearch className="search-icon" />
          <input className="search-input" type="text" placeholder="Search..." />
        </div>
      </header>
    </>
  );
};

export default Header;
