import { Link } from "react-router-dom";
import "./leftbar.scss";
import azflag from "../../assets/flag/azflag.png";
import enflag from "../../assets/flag/ukflag.png";
import cf from "../../assets/flag/cf.png";
import { BsGlobeAsiaAustralia } from "react-icons/bs";
import { BiMaleFemale } from "react-icons/bi";
import { FaChild } from "react-icons/fa";
import { GiPeaceDove } from "react-icons/gi";
import { BiPlanet } from "react-icons/bi";
import { IoArrowBackOutline } from "react-icons/io5";
import { FaHandsHoldingChild } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import {
  setAze,
  setEnglish,
} from "../../redux/features/language/languageSlice";

const Leftbar = ({ handleCategory }) => {
  const dispatch = useDispatch();
  const { language } = useSelector((state) => state.language);
  return (
    <div className="main-left">
      <div className="leftbar">
        <Link to="/" className="logo">
          <div className="back-icon">
            <IoArrowBackOutline />{" "}
          </div>
          {language ? (
            <p> Dashboard by Sector</p>
          ) : (
            <p> DİM üzrə göstəricilər</p>
          )}
        </Link>

        <button onClick={handleCategory} value="" className="navigation">
          <BsGlobeAsiaAustralia className="nav-icon" />
          {language ? <span>General</span> : <span>Ümumi</span>}
        </button>
        <button onClick={handleCategory} value="Gender" className="navigation">
          <BiMaleFemale className="nav-icon" />
          Gender
        </button>
        <button
          onClick={handleCategory}
          value="Childhood"
          className="navigation"
        >
          <FaChild className="nav-icon" />
          {language ? <span>ChildHood</span> : <span>Uşaq</span>}
        </button>
        <button onClick={handleCategory} value="Peace" className="navigation">
          <GiPeaceDove className="nav-icon" />
          {language ? <span>Peace</span> : <span>Sülh</span>}
        </button>
        <button onClick={handleCategory} value="Planet" className="navigation">
          <BiPlanet className="nav-icon" />
          {language ? <span>Planet</span> : <span>Dünya</span>}
        </button>
        <button onClick={handleCategory} value="Welfare" className="navigation">
          <FaHandsHoldingChild className="nav-icon" />
          {language ? <span>Welfare</span> : <span>Sosial rifah</span>}
        </button>
      </div>
      <div className="languages">
        <button>
          {" "}
          <img src={cf} alt="Abbreviation" />
          {language ? "Abbreviation" : "Abreviatura"}
        </button>
        <button onClick={() => dispatch(setEnglish())}>
          {" "}
          <img src={enflag} alt="English" /> EN
        </button>
        <button onClick={() => dispatch(setAze())}>
          <img src={azflag} alt="AZ" /> AZ
        </button>
      </div>
    </div>
  );
};

export default Leftbar;
