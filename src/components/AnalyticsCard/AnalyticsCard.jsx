import React from "react";
import "./AnalyticsCard.css";

const AnalyticsCard = () => {
  return (
    <div className="analyticscard-container">
      <div className="revenue-card-container">
        <div className="card-top-container">
          <h2 className="card-title">Revenue</h2>
          <h3 className="card-price">$56,945</h3>
        </div>

        <div className="card-bottom-container">
            <span className="card-bottom-left">+45%</span>
            <span className="card-bottom-right">from 4.6%</span>
        </div>
      </div>
      <div className="users-card-container">
      <div className="card-top-container">
          <h2 className="card-title">Users</h2>
          <h3 className="card-price">76.8%</h3>
        </div>

        <div className="card-bottom-container">
            <span className="card-bottom-user-left">-1.7%</span>
            <span className="card-bottom-right">from 4.6%</span>
        </div>
      </div>
      <div className="users-card-container">
      <div className="card-top-container">
          <h2 className="card-title">New Signups</h2>
          <h3 className="card-price">116</h3>
        </div>

        <div className="card-bottom-container">
            <span className="card-bottom-signup-left">0.00</span>
        </div>
      </div>
      <div className="users-card-container">
      <div className="card-top-container">
          <h2 className="card-title">Retention</h2>
          <h3 className="card-price">12.67%</h3>
        </div>

        <div className="card-bottom-container">
            <span className="card-bottom-left">+0.6%</span>
            <span className="card-bottom-right">from 4.6%</span>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsCard;
