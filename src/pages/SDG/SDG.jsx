import React, { useState } from "react";
import LeftBar from "../../components/Leftbar/Leftbar";
import Main from "../../components/Main/Main";
import Rightbar from "../../components/Rightbar/Rightbar";
import "./sdg.scss";
import { expenses } from "../../Data/expenses";
const SDG = () => {
  // console.log(expenses);

  const [selectedCategory, setSelectedCategory] = useState();

  //Category filter
  const handleCategory = (event) => {
    setSelectedCategory(event.target.value);
  };

  // Budce Sektoru filteri

  const handleSector = (event) => {
    setSelectedCategory(event.target.value);
    console.log(event.target.value);
  };
  // Budce filteri

  const handleBudce = (e) => {
    setSelectedCategory(e.target.value);
  };

  // Dovlet qurumu filteri

  const handleDovlet = (e) => {
    setSelectedCategory(e.target.value);
  };

  //All filters
  function filteredData(expenses, selected) {
    let filteredExpenses = expenses; // expenses dizisini filteredExpenses'e kopyaladık

    if (selected) {
      // Eğer bir filtre seçildiyse, filtrelemeyi yap
      filteredExpenses = filteredExpenses.filter(
        ({ kategoriya, budcesektoru, budce, dovletqurumu }) =>
          kategoriya === selected ||
          budcesektoru === selected ||
          budce === selected ||
          dovletqurumu === selected
      );
    }

    return filteredExpenses; // Sonuç olarak filtrelenmiş diziyi döndür
  }

  const result = filteredData(expenses, selectedCategory);

  const [filteredExpense, setFilteredExpense] = useState({});

  const handleClick = (id) => {
    const filteredData = result?.find(
      (singleExpense) => singleExpense.id === id
    );
    setFilteredExpense(filteredData);
    console.log(filteredExpense);
  };

  return (
    <div className="sdg-container">
      <LeftBar handleCategory={handleCategory} />
      <Main
        handleSector={handleSector}
        handleBudce={handleBudce}
        handleDovlet={handleDovlet}
        result={result}
        filteredExpense={filteredExpense}
      />
      <Rightbar
        result={result}
        handleClick={handleClick}
        filteredExpense={filteredExpense}
      />
    </div>
  );
};

export default SDG;
