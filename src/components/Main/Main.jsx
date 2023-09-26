import React, { PureComponent, useState, useEffect } from "react";
import { Chart } from "react-google-charts";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
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
  let totalAmount = 0;
  result?.forEach((singleitem) => {
    singleitem.sdg?.forEach((singlesdg) => {
      const amount = singlesdg.totalamount || 0; // Eğer totalamount yoksa, 0 olarak kabul edin
      totalAmount += amount; // Her bir singlesdg.totalamount değerini toplam değişkenine ekleyin
    });
  });
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

  //Pie chart ucun datanin filter edilmesi
  const options = {
    title: "Büdcə sektoruna görə ümumi məbləğin bölünməsi",
    is3D: true,
    backgroundColor: "none",
  };

  const totalBudgetAmount = result?.reduce((total, item) => {
    return (
      total + item.hedef.reduce((subTotal, hedef) => subTotal + hedef.amount, 0)
    );
  }, 0);

  const budceTotalAmounts = {};

  result?.forEach((item) => {
    const budce = item.budce;
    const totalAmount = item.hedef.reduce(
      (total, hedef) => total + hedef.amount,
      0
    );

    if (budceTotalAmounts[budce]) {
      budceTotalAmounts[budce] += totalAmount;
    } else {
      budceTotalAmounts[budce] = totalAmount;
    }
  });

  // Budce miqdarin faizle hesablanmasi
  const budceData = Object.keys(budceTotalAmounts).map((budce) => ({
    budce,
    totalAmount: budceTotalAmounts[budce],
    percentage: (budceTotalAmounts[budce] / totalBudgetAmount) * 100, // Umumi budceye gore faiz hesablama
  }));

  const pieChartData = [
    ["Büdcə sektoru", "Məbləğ"],
    ...budceData.map((item) => [item.budce, item.totalAmount]),
  ];

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
          <BarChart
            angle={-90}
            textAnchor="end"
            width={850}
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
              minPointSize={3}
              barSize={30}
              dataKey="total"
              fill="#1466ae"
              label={{
                position: "top",
                formatter: (value) => formatNumber(value),
              }}
            />
          </BarChart>

          <div className="icons">
            {" "}
            {icons.map((icon, index) => (
              <img src={icon} key={index} alt="" />
            ))}
          </div>
        </div>
      ) : (
        <div className="chart">
          <BarChart
            angle={-90}
            textAnchor="end"
            width={850}
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
            <XAxis dataKey="name" hide />

            <Tooltip />
            <Bar
              minPointSize={3}
              fontSize={10}
              barSize={30}
              dataKey="total"
              fill="#1466ae"
              label={{
                position: "top",
                formatter: (value) => formatNumber(value),
              }}
            />
          </BarChart>

          <div className="icons">
            {" "}
            {icons.map((icon, index) => (
              <img src={icon} key={index} alt="" />
            ))}
          </div>
        </div>
      )}
      <div className="piechart">
        <div className="totalsumsection">{formatNumber(totalAmount)} USD</div>
        <div className="diagramsection">
          <Chart
            chartType="PieChart"
            data={pieChartData}
            options={options}
            width={"100%"}
            height={"200px"}
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
