import SDG1 from "../../assets/sdg/1.png";
import SDG2 from "../../assets/sdg/2.png";
import SDG3 from "../../assets/sdg/3.png";
import SDG4 from "../../assets/sdg/4.png";
import SDG5 from "../../assets/sdg/5.png";
import SDG6 from "../../assets/sdg/6.png";
import SDG7 from "../../assets/sdg/7.png";
import SDG8 from "../../assets/sdg/8.png";
import SDG9 from "../../assets/sdg/9.png";
import SDG10 from "../../assets/sdg/10.png";
import SDG11 from "../../assets/sdg/11.png";
import SDG12 from "../../assets/sdg/12.png";
import SDG13 from "../../assets/sdg/13.png";
import SDG14 from "../../assets/sdg/14.png";
import SDG15 from "../../assets/sdg/15.png";
import SDG16 from "../../assets/sdg/16.jpeg";
import SDG17 from "../../assets/sdg/17.png";
import { Chart } from "react-google-charts";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./sector.scss";
import { BsGlobeAsiaAustralia } from "react-icons/bs";
import { BiMaleFemale } from "react-icons/bi";
import { FaChild } from "react-icons/fa";
import { GiPeaceDove } from "react-icons/gi";
import { BiPlanet } from "react-icons/bi";
import { FaHandsHoldingChild } from "react-icons/fa6";
import { IoArrowBackOutline } from "react-icons/io5";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { icons, expenses } from "../../Data/expenses";
import { useSelector } from "react-redux";
const Sector = () => {
  const { language } = useSelector((state) => state.language);
  function formatNumber(number) {
    if (number >= 1e9) {
      return (number / 1e9).toFixed(1) + "B"; // Milyard
    } else if (number >= 1e6) {
      return (number / 1e6).toFixed(1) + "M"; // Milyon
    } else {
      return number.toString(); // Milyon veya milyar deyilse, olduğu formatı saxla
    }
  }
  const [selectedCategory, setSelectedCategory] = useState();

  const handleCategory = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleReset = (event) => {
    setSelectedCategory(null);
  };
  function filteredData(expenses, selected) {
    let filteredExpenses = expenses; // expenses array filteredExpenses'e kopyaladıq

    if (selected) {
      // Eger bir filtre secilmişse filterlemeni davam ele
      filteredExpenses = filteredExpenses.filter(
        ({ kategoriya }) => kategoriya === selected
      );
    }

    return filteredExpenses;
  }

  const resultCat = filteredData(expenses, selectedCategory);
  const processData = (expenses) => {
    const result = {};

    resultCat?.forEach((item) => {
      item.sdg.forEach((sdgItem) => {
        const sdgName = sdgItem.name;
        const budcesektoru = item.budcesektoru;
        const totalamount = sdgItem.totalamount;

        if (!result[sdgName]) {
          result[sdgName] = {};
        }

        if (!result[sdgName][budcesektoru]) {
          result[sdgName][budcesektoru] = 0;
        }

        result[sdgName][budcesektoru] += totalamount;
      });
    });

    return result;
  };

  const result = processData(expenses);

  const [selectedSDG, setSelectedSDG] = useState(null);

  const handleButtonClick = (sdgKey) => {
    setSelectedSDG(result[sdgKey]);
  };

  const formatDataForBarChart = (selectedSDG) => {
    const formattedData = {};

    if (!selectedSDG) {
      // Eğer selectedSDG boşsa, result içindeki tüm verileri birleştir
      for (const sdgName in result) {
        for (const budcesektoru in result[sdgName]) {
          const key = budcesektoru;
          const value = result[sdgName][budcesektoru];

          if (!formattedData[key]) {
            formattedData[key] = 0;
          }

          formattedData[key] += value;
        }
      }
    } else {
      // Eğer selectedSDG doluysa, sadece seçilen verileri döndür
      for (const [key, value] of Object.entries(selectedSDG)) {
        formattedData[key] = value;
      }
    }

    // Toplam değerleri hesapla ve ekleyin
    let totalValue = 0;
    for (const key in formattedData) {
      totalValue += formattedData[key];
    }

    // Toplam değeri "Toplam" anahtarlı bir öğe olarak ekleyin

    const resultArray = [];

    // formattedData nesnesini diziye dönüştür
    for (const key in formattedData) {
      resultArray.push({
        name: key,
        value: formattedData[key],
      });
    }

    return resultArray;
  };

  const formattedData = formatDataForBarChart(selectedSDG);

  function filteredData(expenses, selected) {
    let filteredExpenses = expenses;

    if (selected) {
      filteredExpenses = filteredExpenses.filter(
        ({ kategoriya }) => kategoriya === selected
      );
    }

    return filteredExpenses; // Kategoriya secilmis data
  }

  ////////////////////////////////////////////////////////////////

  var filtrelenmisSDGIsimleri = [];

  resultCat.forEach(function (item) {
    item.sdg.forEach(function (sdgItem) {
      if (sdgItem.totalamount > 0) {
        filtrelenmisSDGIsimleri.push(sdgItem.name);
      }
    });
  });

  // Tekrarlanan SDG adlarını sil
  var uniqueSDGIsimleri = [...new Set(filtrelenmisSDGIsimleri)];

  var eslesenSDGIsimleri = Object.keys(result).filter((sdgKey) =>
    uniqueSDGIsimleri.includes(sdgKey)
  );

  const selectedhedef = [].concat(
    ...resultCat?.map((item) =>
      item.hedef.map((hedef) => ({
        hedefmaddesi: hedef.hedefmaddesi,
        hedefadi: hedef.hedefadi,
        amount: hedef.amount,
      }))
    )
  );
  // console.log(selectedhedef);

  //Pie chart ucun datanin filter edilmesi
  const options = {
    title: !language
      ? "Büdcə sektoruna görə ümumi məbləğin bölünməsi"
      : "Share of the total amount by budget sector",
    is3D: true,
    backgroundColor: "none",
  };
  const totalBudgetAmount = resultCat?.reduce((total, item) => {
    return (
      total + item.hedef.reduce((subTotal, hedef) => subTotal + hedef.amount, 0)
    );
  }, 0);

  const budceTotalAmounts = {};

  resultCat?.forEach((item) => {
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
    <div className="sector">
      <div className="header">
        <Link to="/">
          <IoArrowBackOutline style={{ fontSize: "24px" }} />
          {language ? (
            <h2>Dashboard by Sector</h2>
          ) : (
            <h2>Sektor üzrə göstəricilər</h2>
          )}
        </Link>
      </div>
      <div className="body">
        <div className="chart">
          {language ? (
            <div className="chart-header">SDG Financing by Sector</div>
          ) : (
            <div className="chart-header">DİM üzrə finans</div>
          )}
          <div className="barchart">
            {formattedData && (
              <BarChart
                layout="vertical"
                width={800}
                height={300}
                data={formattedData}
                margin={{ top: 5, right: 30, left: 110, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="2 3" />
                <XAxis
                  label={{
                    position: "right",
                    formatter: (value) => formatNumber(value),
                    fill: "gray",
                  }}
                  tick={{ fontSize: 10, fill: "gray", lineHeight: 1, dy: 10 }}
                  type="number"
                  dataKey="value"
                />
                <YAxis
                  width={100}
                  label={{
                    fontSize: 8,
                    fill: "gray",
                  }}
                  tick={{
                    dy: 0,
                    dx: -10,
                    fontSize: 13,
                    fill: "gray",
                    width: 250,
                    angle: 0,
                  }}
                  type="category"
                  dataKey="name"
                />
                <Tooltip />

                <Bar
                  label={{
                    position: "right",
                    formatter: (value) => formatNumber(value),
                  }}
                  dataKey="value"
                  fill="#1466ae"
                  barSize={30}
                />
              </BarChart>
            )}
          </div>
        </div>
        <div className="rightarea">
          <div className="filter-category">
            <button onClick={handleReset} value="" className="navigation">
              <BsGlobeAsiaAustralia className="nav-icon" />
              {language ? <span>General</span> : <span>Ümumi</span>}
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
              {language ? <span>Chilghood</span> : <span>Uşaq</span>}
            </button>
            <button
              onClick={handleCategory}
              value="Peace"
              className="navigation"
            >
              <GiPeaceDove className="nav-icon" />
              {language ? <span>Peace</span> : <span>Sülh</span>}
            </button>
            <button
              onClick={handleCategory}
              value="Planet"
              className="navigation"
            >
              <BiPlanet className="nav-icon" />
              {language ? <span>Planet</span> : <span>Dünya</span>}
            </button>
            <button
              onClick={handleCategory}
              value="Welfare"
              className="navigation"
            >
              <FaHandsHoldingChild className="nav-icon" />
              {language ? <span>Welfare</span> : <span>Sosial rifah</span>}
            </button>
          </div>
          <div className="sdg-target">
            <div className="icons">
              {eslesenSDGIsimleri.map((sdgKey) => (
                <div key={sdgKey} onClick={() => handleButtonClick(sdgKey)}>
                  <img
                    src={
                      sdgKey === "SDG1"
                        ? SDG1
                        : sdgKey === "SDG2"
                        ? SDG2
                        : sdgKey === "SDG3"
                        ? SDG3
                        : sdgKey === "SDG4"
                        ? SDG4
                        : sdgKey === "SDG5"
                        ? SDG5
                        : sdgKey === "SDG6"
                        ? SDG6
                        : sdgKey === "SDG7"
                        ? SDG7
                        : sdgKey === "SDG8"
                        ? SDG8
                        : sdgKey === "SDG9"
                        ? SDG9
                        : sdgKey === "SDG10"
                        ? SDG10
                        : sdgKey === "SDG11"
                        ? SDG11
                        : sdgKey === "SDG12"
                        ? SDG12
                        : sdgKey === "SDG13"
                        ? SDG13
                        : sdgKey === "SDG14"
                        ? SDG14
                        : sdgKey === "SDG15"
                        ? SDG15
                        : sdgKey === "SDG16"
                        ? SDG16
                        : sdgKey === "SDG17"
                        ? SDG17
                        : null
                    }
                    alt={sdgKey}
                  />
                </div>
              ))}
              <button
                onClick={() => {
                  setSelectedSDG(null);
                }}
                style={{ width: "50px", height: "50px", cursor: "pointer" }}
              >
                {language ? <span>All SDG</span> : <span>Ümumi</span>}
              </button>
            </div>
            <div className="targets">
              {language ? <span>Targets</span> : <span>DİM üzrə hədəf</span>}
              <div className="target-list">
                <table>
                  <thead>
                    {language ? (
                      <tr>
                        <th>SDG Target</th>
                        <th>Amount</th>
                      </tr>
                    ) : (
                      <tr>
                        <th>Hədəf Maddəsi</th>
                        <th>Məbləğ</th>
                      </tr>
                    )}
                  </thead>
                  <tbody>
                    {selectedhedef.map((singlehedef) => (
                      <tr>
                        <td>{singlehedef.hedefmaddesi}</td>
                        <td>{formatNumber(singlehedef.amount)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
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
    </div>
  );
};

export default Sector;
