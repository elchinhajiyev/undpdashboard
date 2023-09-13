import React from "react";
import inff from "../../assets/funded_logo/inff.png";
import joint from "../../assets/funded_logo/joint.png";
import undp from "../../assets/funded_logo/undp.png";
import { Link } from "react-router-dom";
import "./home.scss";
const Home = () => {
  return (
    <div className="home">
      <div className="logo">
        {/* <img src={joint} alt="joint" />
        <img src={inff} alt="inff" /> */}
        <img src={undp} alt="undp" />
      </div>
      <div className="main-box">
        <p>
          2022-ci il üzrə Azərbaycan Respublikasının mərkəzləşdirilmiş büdcə
          xərclərinin <br />
          Dayanıqlı İnkişaf Məqsədləri (DİM) ilə uyğunluğu
        </p>
      </div>
      <div className="navigation">
        <Link to="/sdg" className="bysdg">
          {" "}
          DİM üzrə göstəricilər
        </Link>
        <Link to="/sector" className="bysector">
          Sektor üzrə göstəricilər
        </Link>
        <Link to="/gender" className="gender">
          Şəbəkə qrafiki
        </Link>
      </div>
    </div>
  );
};

export default Home;
