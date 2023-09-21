import { useEffect, useState } from "react";
import LeftBar from "../../components/Leftbar/Leftbar";
import Main from "../../components/Main/Main";
import Rightbar from "../../components/Rightbar/Rightbar";
import "./sdg.scss";
import { expenses } from "../../Data/expenses";
const SDG = () => {
  const [filteredSdg, setFilteredSdg] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();
  const [showSdg, setShowSdg] = useState(true);
  //Category filter
  const handleCategory = (event) => {
    setSelectedCategory(event.target.value);
    setShowSdg(true);
  };

  // Budce Sektoru filteri

  const handleSector = (event) => {
    setSelectedCategory(event.target.value);
  };
  // Budce filteri

  const handleBudce = (e) => {
    setSelectedCategory(e.target.value);
  };

  // Dovlet qurumu filteri

  const handleDovlet = (e) => {
    setSelectedCategory(e.target.value);
  };
  const [chartResult, setChartResult] = useState([]);
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

  const [showExpense, setShowExpense] = useState(true);
  const [filteredExpense, setFilteredExpense] = useState({});

  const handleClick = (id) => {
    const filteredData = result?.find(
      (singleExpense) => singleExpense.id === id
    );
    setFilteredExpense(filteredData);
    setShowSdg(false);
  };

  useEffect(() => {
    // Tüm expenses içindeki SDG objelerini birleştirip toplamak için kullanılacak boş bir dizi oluşturun
    const mergedSdg = [];
    // expenses üzerinde dönerek SDG objelerini birleştirip toplayın
    result?.forEach((element) => {
      element.sdg?.forEach((item) => {
        // Eğer mergedSdg içinde aynı "name" değerine sahip bir öğe varsa, totalamount'u güncelleyin; aksi halde yeni bir öğe ekleyin
        const existingItem = mergedSdg.find(
          (mergedItem) => mergedItem.name === item.name
        );
        if (existingItem) {
          existingItem.totalamount += item.totalamount;
        } else {
          mergedSdg.push({ ...item });
        }
      });
    });

    setFilteredSdg(mergedSdg);
  }, []);

  return (
    <div className="sdg-container">
      <LeftBar handleCategory={handleCategory} setShowSdg={setShowSdg} />
      <Main
        handleSector={handleSector}
        handleBudce={handleBudce}
        handleDovlet={handleDovlet}
        result={result}
        filteredExpense={filteredExpense}
        filteredSdg={filteredSdg}
        showSdg={showSdg}
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
