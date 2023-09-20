import React from "react";
import inff from "../../assets/funded_logo/inff.png";
import joint from "../../assets/funded_logo/joint.png";
import undp from "../../assets/funded_logo/undp.png";
import { Link } from "react-router-dom";
import "./home.scss";
const Home = () => {
  return (
    <div className="home">
      <div className="header-section">
        <select name="" id="">
          <option value="">2022</option>
          <option value="">2023</option>
          <option value="">2024</option>
        </select>
        <div className="languages">
          <button>EN</button>
          <button>AZ</button>
        </div>
      </div>
      <div className="logo">
        {/* <img src={joint} alt="joint" />
        <img src={inff} alt="inff" /> */}
        <img src={undp} alt="undp" />
      </div>
      <div className="main-box">
        <p>
          Azərbaycan Respublikasının icmal büdcə xərclərinin <br />
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
