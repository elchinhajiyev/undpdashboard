import React from "react";
import azflag from "../../assets/flag/azflag.png";
import enflag from "../../assets/flag/ukflag.png";
import undp from "../../assets/funded_logo/undp.png";
import emblemaz from "../../assets/funded_logo/emblemaz.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setEnglish,
  setAze,
} from "../../redux/features/language/languageSlice";
import "./home.scss";

const Home = () => {
  const dispatch = useDispatch();
  const { language } = useSelector((state) => state.language);
  console.log(language);
  return (
    <div className="home">
      <div className="header-section">
        <select name="" id="">
          <option value="">2022</option>
          <option value="">2023</option>
          <option value="">2024</option>
        </select>
        <div className="languages">
          <button onClick={() => dispatch(setEnglish())}>
            {" "}
            <img src={enflag} alt="English" /> EN
          </button>
          <button onClick={() => dispatch(setAze())}>
            <img src={azflag} alt="Az" /> AZ
          </button>
        </div>
      </div>
      <div className="logo">
        {/* <img src={joint} alt="joint" />
        <img src={inff} alt="inff" /> */}
        <img src={emblemaz} alt="undp" />
        <img src={undp} alt="undp" />
      </div>
      <div className="main-box">
        {language ? (
          <p>
            Allignment of the National Budget of the Republic of
            Azerbaijan towards SDGs
          </p>
        ) : (
          <p>
            Azərbaycan Respublikasının icmal büdcə xərclərinin <br />
            Dayanıqlı İnkişaf Məqsədləri (DİM) ilə uyğunluğu
          </p>
        )}
      </div>
      <div className="navigation">
        <Link to="/sdg" className="bysdg">
          {" "}
          {language ? (
            <span> Dashboard by SDG</span>
          ) : (
            <span> DİM üzrə göstəricilər</span>
          )}
        </Link>
        <Link to="/sector" className="bysector">
          {language ? (
            <span> Dashboard by Sector</span>
          ) : (
            <span> Sektor üzrə göstəricilər</span>
          )}
        </Link>
      </div>
    </div>
  );
};

export default Home;
