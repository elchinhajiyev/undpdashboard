import React, { useState } from "react";
import LeftBar from "../../components/Leftbar/Leftbar";
import Main from "../../components/Main/Main";
import Rightbar from "../../components/Rightbar/Rightbar";
import "./sdg.scss";
import { expenses } from "../../Data/expenses";
const SDG = () => {
  console.log(expenses);

  const [selectedCategory, setSelectedCategory] = useState(null);

  //

  return (
    <div className="sdg-container">
      <LeftBar />
      <Main />
      <Rightbar />
    </div>
  );
};

export default SDG;
