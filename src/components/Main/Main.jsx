import React, { PureComponent, useState } from 'react';
import { PieChart, Pie, Sector, ResponsiveContainer, BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend  } from 'recharts';
import './main.scss'
import { Link } from 'react-router-dom'
const Main = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const data = [
    { name: 'Operating', value: 400 },
    { name: 'Investment', value: 300 },
    { name: 'FOME', value: 300 },
    { name: 'SGP', value: 200 },
  ];

  const data2 = [
    {
      name: 'SDG 1',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'SDG 2',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'SDG 3',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'SDG 4',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'SDG 5',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'SDG 6',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'SDG 7',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'SDG 8',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'SDG 9',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'SDG 10',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'SDG 11',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    
    {
      name: 'SDG 12',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    
    {
      name: 'SDG 13',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    
    {
      name: 'SDG 14',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    
    {
      name: 'SDG 15',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    
    {
      name: 'SDG 16',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    
  ];

  const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';
  
    return (
      <g>
        <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
          {payload.name}
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 10}
          fill={fill}
        />
        <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`$ ${value}`}</text>
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
          {`(Rate ${(percent * 100).toFixed(2)}%)`}
        </text>
      </g>
    );
  };
  
  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  };
  

  return (
    <div className='main'>
      <div className='main-navigation'>
       <Link to='/sdg' className='nav-item'>Dashboard By SDG</Link>
       <Link to='/sector' className='nav-item'>Dashboard by Sector</Link>
       <Link to='/gender' className='nav-item'>SDG 5-Gender</Link>
       <Link to='/sdg16' className='nav-item'>SDG 16 - Peace, Justice and Strong Institutions</Link>
      </div>
      <div className="main-filters">
        <div className="filter budget-filter">
          <label htmlFor="budget"> BÜDCƏ SEKTORU</label>
            <select name="budget" id="budget">
            <option value="initial">Hamısı </option>
              <option value="initial">Ümumi dövlət xidmətləri</option>
              <option value="initial">Sosial müdafiə və sosial təminat</option>
              <option value="initial">Kənd təsərrüfatı</option>
              <option value="initial">Ətraf mühitin mühafizəsi</option>
              <option value="initial">Təhsil</option>
            </select>
        </div>
        <div className="filter institution-filter">
        <label htmlFor="budget">BÜDCƏ</label>
            <select name="budget" id="budget">
            <option value="initial">Hamısı </option>
            <option value="initial">ARDB </option>
              <option value="initial">İSF</option>
              <option value="initial">ARDNF</option>
              <option value="initial">DSMF</option>
            </select>
        </div>
        <div className="filter cofog-filter">
        <label htmlFor="budget">DÖVLƏT QURUMU</label>
            <select value='All' name="budget" id="budget">
              <option value="initial">Hamısı </option>
              <option value="initial">DMA </option>
              <option value="initial">ƏN</option>
              <option value="initial">İN</option>
              <option value="initial">AHİK</option>
              <option value="initial">MDN</option>
            </select>
        </div>
       
      </div>
      <div className="expenditure-filter">
      <ResponsiveContainer width="90%" height="65%">
        <PieChart width={400} height={400}>
          <Pie
            activeIndex={activeIndex}
            activeShape={renderActiveShape}
            data={data}
            cx="70%"
            cy="55%"
            innerRadius={55}
            outerRadius={70}
            fill="#8884d8"
            dataKey="value"
            onMouseEnter={onPieEnter}
          />
        </PieChart>
      </ResponsiveContainer>
      </div>

    <div className="stacked-chart">
    <ResponsiveContainer width="100%" height="90%">
        <BarChart
          width={0}
          height={0}
          data={data2}
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" stackId="a" fill="#1466ae" />
          <Bar dataKey="uv" stackId="a" fill="#fcb713" />
        </BarChart>
      </ResponsiveContainer>
    </div>
    </div>
  )
}

export default Main
