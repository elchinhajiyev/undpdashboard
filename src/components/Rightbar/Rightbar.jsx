import { useEffect, useState } from "react";
import "./rightbar.scss";
const Rightbar = ({ result, handleClick, filteredExpense }) => {
  const [filtered, setFiltered] = useState([]);
  function formatNumber(number) {
    if (number >= 1e9) {
      return (number / 1e9).toFixed(1) + "B"; // Milyar
    } else if (number >= 1e6) {
      return (number / 1e6).toFixed(1) + "M"; // Milyon
    } else {
      return number.toString(); // Milyon veya milyar değilse, düz rakam olarak bırak
    }
  }

  useEffect(() => {
    setFiltered(result[0]);
  }, []);

  // const [filteredExpenses, setFilteredExpenses] = useState({});

  // const handleClick = (id) => {
  //   const filteredData = result?.find(
  //     (singleExpense) => singleExpense.id === id
  //   );
  //   setFilteredExpenses(filteredData);
  //   console.log(filteredExpenses);
  // };

  return (
    <div className="rightbar">
      <div className="logo-area">LOGO AREA</div>
      <div className="targetlist">
        <div className="target-table">
          <table className="table">
            <tr className="target-header">
              <th>DİM üzrə hədəf</th>
              <th style={{ textAlign: "right" }}>Məbləğ</th>
            </tr>
            {filteredExpense?.hedef?.map((target, index) => (
              <tr className="list-item" key={index}>
                <td>{target.hedefmaddesi}</td>
                <td style={{ textAlign: "right" }}>
                  {formatNumber(target.amount)}
                </td>
                <div className="tooltip">{target.hedefadi}</div>
              </tr>
            ))}
          </table>
        </div>
      </div>
      XƏRC İSTİQAMƏTLƏRİ
      <div className="expenselist">
        <div className="expense-table">
          <table className="table">
            <tr className="expense-header">
              <th>Ad</th>
              <th style={{ textAlign: "right" }}>Məbləğ</th>
            </tr>
            {result?.map((single, index) => (
              <tr className="list-item" key={index}>
                <td
                  onClick={() => handleClick(single.id)}
                  style={{ cursor: "pointer" }}
                >
                  {single.xerc}
                </td>
                <td style={{ textAlign: "right" }}>
                  {formatNumber(
                    single.sdg.reduce(
                      (acc, singlesdg) => acc + singlesdg.totalamount,
                      0
                    )
                  )}
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
