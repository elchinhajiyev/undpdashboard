import React, { PureComponent, useState, useEffect } from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Tooltip,
} from "recharts";
import "./main.scss";
import { Link } from "react-router-dom";
import { expenses, icons } from "../../Data/expenses";
import sdg1 from "../../assets/sdg/1.png";
const Main = ({
  handleSector,
  handleDovlet,
  handleBudce,
  result,
  filteredExpense,
  filteredSdg,
  showSdg,
}) => {
  const CustomIcon = (props) => {
    const { x, y, payload } = props;
    // return
    return (
      <>
        <svg
          x={x}
          y={y}
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-arrow-down-left-square-fill"
          viewBox="0 0 16 16"
        >
          <path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm8.096-10.803L6 9.293V6.525a.5.5 0 0 0-1 0V10.5a.5.5 0 0 0 .5.5h3.975a.5.5 0 0 0 0-1H6.707l4.096-4.096a.5.5 0 1 0-.707-.707z" />
        </svg>
        <img src={sdg1} alt="" />;
      </>
    );
  };

  function formatNumber(number) {
    if (number >= 1e9) {
      return (number / 1e9).toFixed(1) + "B"; // Milyar
    } else if (number >= 1e6) {
      return (number / 1e6).toFixed(1) + "M"; // Milyon
    } else {
      return number.toString(); // Milyon veya milyar değilse, düz rakam olarak bırak
    }
  }
  const budcesektoruValues = expenses.map((expense) => expense.budcesektoru);
  const budce = expenses.map((expense) => expense.budce);
  const dovletqurumu = expenses.map((expense) => expense.dovletqurumu);
  const uniqueBudcesektoruValues = [...new Set(budcesektoruValues)];
  const uniqueBudceValues = [...new Set(budce)];
  const uniqueDovletqurumuValues = [...new Set(dovletqurumu)];

  const data2 = filteredExpense?.sdg?.map((single) => ({
    name: single.name,
    total: single.totalamount,
  }));

  const data = filteredSdg?.map((single) => ({
    name: single.name,
    total: single.totalamount,
  }));

  return (
    <div className="main">
      <div className="main-navigation">
        <Link to="/sector" className="nav-item">
          Sektor üzrə göstəricilər
        </Link>
        <Link to="/gender" className="nav-item">
          Şəbəkə qrafiki
        </Link>
      </div>
      <div className="main-filters">
        <div className="filter budget-filter">
          <label htmlFor="budget"> BÜDCƏ SEKTORU</label>
          <select onChange={handleSector} name="budget" id="budget">
            <option value="">Ümumi</option>
            {uniqueBudcesektoruValues.map((value, index) => (
              <option key={index} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>
        <div className="filter institution-filter">
          <label htmlFor="budget">BÜDCƏ</label>
          <select onChange={handleBudce} name="budget" id="budget">
            <option value="">Ümumi</option>
            {uniqueBudceValues.map((budcevalue, index) => (
              <option key={index} value={budcevalue}>
                {budcevalue}
              </option>
            ))}
          </select>
        </div>
        <div className="filter cofog-filter">
          <label htmlFor="budget">DÖVLƏT QURUMU</label>
          <select onChange={handleDovlet} name="budget" id="budget">
            <option value="">Ümumi</option>
            {uniqueDovletqurumuValues.map((dvalue, index) => (
              <option key={index} value={dvalue}>
                {dvalue}
              </option>
            ))}
          </select>
        </div>
      </div>
      {showSdg ? (
        <div className="chart">
          <ResponsiveContainer width="100%" height={350}>
            <BarChart
              width={500}
              height={350}
              data={data}
              margin={{
                top: 25,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" hide />
              <Tooltip />
              <Bar
                dataKey="total"
                fill="#1466ae"
                label={{
                  position: "top",
                  formatter: (value) => formatNumber(value),
                }}
              />
            </BarChart>
          </ResponsiveContainer>
          <div className="icons">
            {" "}
            {icons.map((icon, index) => (
              <img src={icon} key={index} alt="" />
            ))}
          </div>
        </div>
      ) : (
        <div className="chart">
          <ResponsiveContainer width="95%" height={350}>
            <BarChart
              width={500}
              height={350}
              data={data2}
              margin={{
                top: 25,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" tick={<CustomIcon />} />

              <Tooltip />
              <Bar
                dataKey="total"
                fill="#1466ae"
                label={{
                  position: "top",
                  formatter: (value) => formatNumber(value),
                }}
              />
            </BarChart>
          </ResponsiveContainer>
          <div className="icons">
            {" "}
            {icons.map((icon, index) => (
              <img src={icon} key={index} alt="" />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Main;
