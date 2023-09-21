import React from "react";
import { Link } from "react-router-dom";
import "./sector.scss";
import { BsGlobeAsiaAustralia } from "react-icons/bs";
import { BiMaleFemale } from "react-icons/bi";
import { FaChild } from "react-icons/fa";
import { GiPeaceDove } from "react-icons/gi";
import { BiPlanet } from "react-icons/bi";
import { FaHandsHoldingChild } from "react-icons/fa6";
import { IoArrowBackOutline } from "react-icons/io5";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { icons } from "../../Data/expenses";
const Sector = () => {
  const handleCategory = () => {};
  const data = [
    {
      name: "Page A",
      uv: 5000,
      pv: 3400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page H",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Page T",
      uv: 3490,
      pv: 4400,
      amt: 2100,
    },
    {
      name: "Page Z",
      uv: 3490,
      pv: 4900,
      amt: 2100,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 5000,
      amt: 2100,
    },
  ];
  return (
    <div className="sector">
      <div className="header">
        <Link to="/">
          <IoArrowBackOutline style={{ fontSize: "24px" }} />
          <h1>Sektor üzrə göstəricilər</h1>
        </Link>
      </div>
      <div className="body">
        <div className="chart">
          <div className="chart-header">DİM üzrə finans</div>
          <div className="barchart">
            <BarChart
              width={700}
              layout="vertical"
              height={500}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <YAxis type="category" dataKey="name" />
              <XAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="pv" fill="#1466ae" />
            </BarChart>
          </div>
        </div>
        <div className="rightarea">
          <div className="filter-category">
            <button onClick={handleCategory} value="" className="navigation">
              <BsGlobeAsiaAustralia className="nav-icon" />
              Ümumi
            </button>
            <button
              onClick={handleCategory}
              value="Gender"
              className="navigation"
            >
              <BiMaleFemale className="nav-icon" />
              Gender
            </button>
            <button
              onClick={handleCategory}
              value="Childhood"
              className="navigation"
            >
              <FaChild className="nav-icon" />
              Uşaq
            </button>
            <button
              onClick={handleCategory}
              value="Peace"
              className="navigation"
            >
              <GiPeaceDove className="nav-icon" />
              Sülh
            </button>
            <button
              onClick={handleCategory}
              value="Planet"
              className="navigation"
            >
              <BiPlanet className="nav-icon" />
              Dünya
            </button>
            <button
              onClick={handleCategory}
              value="Welfare"
              className="navigation"
            >
              <FaHandsHoldingChild className="nav-icon" />
              Sosial rifah
            </button>
          </div>
          <div className="sdg-target">
            <div className="icons">
              {" "}
              {icons.map((icon, index) => (
                <img src={icon} key={index} alt="" />
              ))}
            </div>
            <div className="targets">
              DİM üzrə hədəf
              <select name="Targets" id="">
                <option value="">1.1</option>
                <option value="">1.1</option>
                <option value="">1.1</option>
                <option value="">1.1</option>
                <option value="">1.1</option>
                <option value="">1.1</option>
                <option value="">1.1</option>
                <option value="">1.1</option>
                <option value="">1.1</option>
                <option value="">1.1</option>
                <option value="">1.1</option>
                <option value="">1.1</option>
                <option value="">1.1</option>
                <option value="">1.1</option>
                <option value="">1.1</option>
                <option value="">1.1</option>
                <option value="">1.1</option>
                <option value="">1.1</option>
                <option value="">1.1</option>
                <option value="">1.1</option>
                <option value="">1.1</option>
                <option value="">1.1</option>
                <option value="">1.1</option>
                <option value="">1.1</option>
                <option value="">1.1</option>
                <option value="">1.1</option>
                <option value="">1.1</option>
                <option value="">1.1</option>
                <option value="">1.1</option>
                <option value="">1.1</option>
                <option value="">1.1</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sector;
