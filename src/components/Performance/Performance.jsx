import React from "react";
import "./Performance.css";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AreaChart, XAxis, YAxis, Area, ResponsiveContainer } from "recharts";

const Performance = ({ data }) => {
  return (
    <div className="performance-container">
      <div className="performance-top-container">
        <h2 className="performance-title">Performance</h2>
        <BsThreeDotsVertical className="performance-icon" />
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <AreaChart
          data={data}
          margin={{ top: 50, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" strokeWidth={0} />
          <YAxis strokeWidth={0} />
          <Area
            dot={false}
            type="monotone"
            dataKey="uv"
            stroke="#679CF6"
            strokeWidth={3}
            fillOpacity={1}
            fill="#4285F440"
          />
          <Area
            dot={false}
            type="monotone"
            dataKey="pv"
            stroke="#20C997"
            strokeWidth={3}
            fillOpacity={1}
            fill="url(#colorPv)"
          />
        </AreaChart>
      </ResponsiveContainer>

      <div className="data-descr-container">
        <div className="instagram-container">
          <div className="insta-color"></div>
          <p className="insta-name">Instagram</p>
        </div>
        <div className="facebook-container">
          <div className="facebook-color"></div>
          <p className="insta-name">Facebook</p>
        </div>
      </div>
    </div>
  );
};

export default Performance;
