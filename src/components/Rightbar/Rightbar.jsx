import "./rightbar.scss";
const Rightbar = () => {
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
            {Array(50)
              .fill()
              .map((_, index) => (
                <tr className="list-item" key={index}>
                  <td>3.8</td>
                  <td style={{ textAlign: "right" }}>6933M</td>
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
            {Array(50)
              .fill()
              .map((_, index) => (
                <tr className="list-item" key={index}>
                  <td>
                    Azərbaycan Respublikası Dövlət Neft Fondunun idarə edilməsi
                    ilə bağlı xərclər
                  </td>
                  <td style={{ textAlign: "right" }}>6933M</td>
                </tr>
              ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
