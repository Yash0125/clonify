import React from "react";
import "./InstalledApp.css";
import zepplin from "./../../assets/zeplin.png";
import figma from "./../../assets/figma.png";
import meta from "./../../assets/meta.png";
import angular from "./../../assets/angular.png";
import vue from "./../../assets/vue.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const InstalledApp = () => {
  return (
    <div className="installedapp-container">
      <div className="installedapp-top-container">
        <h2 className="performance-title">Installed App</h2>
      </div>

      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Source</th>
              <th>Amount</th>
              <th>Status</th>
              <th>User ID</th>
              <th>Joined</th>
              <th>Group</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="row-1-container">
                <div className="app-logo">
                  <img src={zepplin} alt="zepplin-logo" />
                </div>
                <span>Zepplin</span>
              </td>
              <td className="row-2">686.00</td>
              <td>
                {" "}
                <span className="row-3-active">Active</span>
              </td>

              <td className="table-text-data ">114423</td>
              <td className="table-text-data ">October</td>
              <td className="table-text-data ">Design</td>
            </tr>
            <tr>
              <td className="row-1-container">
                <div className="app-logo">
                  <img src={figma} alt="zepplin-logo" />
                </div>
                <span>Figma</span>
              </td>
              {/* <td className="row-1-container">
                <div className="app-logo">
                  <img src={zepplin} alt="zepplin-logo" />
                </div>
                  <span>Zepplin</span>
              </td> */}
              <td className="row-2">864.00</td>
              <td>
                {" "}
                <span className="row-3-pending">Pending</span>
              </td>
              <td className="table-text-data ">67349</td>
              <td className="table-text-data ">June</td>
              <td className="table-text-data ">Finance</td>
            </tr>
            <tr>
              <td className="row-1-container">
                <div className="app-logo">
                  <img src={meta} alt="zepplin-logo" />
                </div>
                <span>Meta</span>
              </td>
              <td className="row-2">176.00</td>
              <td>
                <span className="row-3-cancel">Cancelled</span>
              </td>
              <td className="table-text-data ">89346</td>
              <td className="table-text-data ">March</td>
              <td className="table-text-data ">Coding</td>
            </tr>
            <tr>
              <td className="row-1-container">
                <div className="app-logo">
                  <img src={angular} alt="zepplin-logo" />
                </div>
                <span>Angular</span>
              </td>
              <td className="row-2">49.00</td>
              <td>
                <span className="row-3-active">Active</span>
              </td>
              <td className="table-text-data ">12329</td>
              <td className="table-text-data ">February</td>
              <td className="table-text-data ">Marketing</td>
            </tr>
            <tr>
              <td className="row-1-container">
                <div className="app-logo">
                  <img src={vue} alt="zepplin-logo" />
                </div>
                <span>Vue</span>
              </td>
              <td className="row-2">999.00</td>
              <td>
                {" "}
                <span className="row-3-active">Active</span>
              </td>
              <td className="table-text-data ">674423</td>
              <td className="table-text-data ">October</td>
              <td className="table-text-data ">Finance</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="app-bottom-container">
        <FaArrowLeft className="app-bottom-icon" />
        <span>1/15</span>
        <FaArrowRight className="app-bottom-icon"/>
      </div>
    </div>
  );
};

export default InstalledApp;
