import React from "react";
import "./HeroSection.css";
import { AiOutlineThunderbolt } from "react-icons/ai";

const HeroSection = () => {
  return (
    <div className="herosection-container">
      <div className="herosection-left-container">
        <h2 className="herosection-left-title">Unlock premium stats</h2>
        <p className="herosection-left-description">
          Get up to 10TB of storage for a limited time
        </p>
      </div>
      <div className="herosection-right-container">
        <button className="upgrade-btn-container">
          <AiOutlineThunderbolt className="upgrade-icon" />
          <span>Upgrade</span>
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
