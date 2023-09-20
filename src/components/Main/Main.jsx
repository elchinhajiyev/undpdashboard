import React, { PureComponent, useState } from "react";
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
const Main = ({
  handleSector,
  handleDovlet,
  handleBudce,
  result,
  filteredExpense,
}) => {
  const budcesektoruValues = expenses.map((expense) => expense.budcesektoru);
  const budce = expenses.map((expense) => expense.budce);
  const dovletqurumu = expenses.map((expense) => expense.dovletqurumu);

  const uniqueBudcesektoruValues = [...new Set(budcesektoruValues)];
  const uniqueBudceValues = [...new Set(budce)];
  const uniqueDovletqurumuValues = [...new Set(dovletqurumu)];

  const data = filteredExpense?.sdg?.map((single) => ({
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
      <div className="chart">
        <ResponsiveContainer width="95%" height={350}>
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" hide />
            <YAxis />
            <Tooltip />
            <Bar dataKey="total" label={false} fill="#118cfd" />
          </BarChart>
        </ResponsiveContainer>
        <div className="icons">
          {" "}
          {icons.map((icon, index) => (
            <img src={icon} key={index} alt="" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
