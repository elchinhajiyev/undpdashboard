import { useEffect, useState } from "react";
import "./rightbar.scss";
import undp from "../../assets/funded_logo/undp.png";
import emblemaz from "../../assets/funded_logo/emblemaz.png";
import { useSelector } from "react-redux";
const Rightbar = ({ result, handleClick, filteredExpense }) => {
  const { language } = useSelector((state) => state.language);
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

  let totalAmount = 0;

  result?.forEach((singleitem) => {
    singleitem.sdg?.forEach((singlesdg) => {
      const amount = singlesdg.totalamount || 0; // Eğer totalamount yoksa, 0 olarak kabul edin
      totalAmount += amount; // Her bir singlesdg.totalamount değerini toplam değişkenine ekleyin
    });
  });

  return (
    <div className="rightbar">
      <div className="logo-area">
        <img src={emblemaz} alt="" />
        <img src={undp} alt="" />
      </div>
      <div className="targetlist">
        <div className="target-table">
          <table className="table">
            <thead>
              {language ? (
                <tr className="target-header">
                  <th>SDG target</th>
                  <th style={{ textAlign: "right" }}>Amount</th>
                </tr>
              ) : (
                <tr className="target-header">
                  <th>DİM üzrə hədəf</th>
                  <th style={{ textAlign: "right" }}>Məbləğ</th>
                </tr>
              )}
            </thead>
            <tbody>
              {filteredExpense.hedef?.map((target, index) => (
                <tr className="list-item" key={index}>
                  <td>{target.hedefmaddesi}</td>
                  <td style={{ textAlign: "right" }}>
                    {formatNumber(target.amount)}
                  </td>
                  <td className="tooltip">{target.hedefadi}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {language ? (
        <span>EXPENDITURE DIRECTIONS</span>
      ) : (
        <span>XƏRC İSTİQAMƏTLƏRİ</span>
      )}
      <div className="expenselist">
        <div className="expense-table">
          <table className="table">
            <thead>
              {language ? (
                <tr className="expense-header">
                  <th>Name</th>
                  <th style={{ textAlign: "right" }}>Amount</th>
                </tr>
              ) : (
                <tr className="expense-header">
                  <th>Ad</th>
                  <th style={{ textAlign: "right" }}>Məbləğ</th>
                </tr>
              )}
            </thead>
            <tbody>
              {result?.map((single, index) => (
                <tr className="list-item" key={index}>
                  <td
                    onClick={() => handleClick(single.id)}
                    style={{ cursor: "pointer" }}
                  >
                    {language ? single.xercen : single.xerc}
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
            </tbody>
          </table>
        </div>
      </div>
      <div
        className="total"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "5px",
        }}
      >
        {language ? (
          <p style={{ fontSize: "small" }}>Total Amount</p>
        ) : (
          <p style={{ fontSize: "small" }}>Ümumi məbləğ</p>
        )}
        <div style={{ fontSize: "small", fontWeight: "bold" }}>
          {formatNumber(totalAmount)}
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
