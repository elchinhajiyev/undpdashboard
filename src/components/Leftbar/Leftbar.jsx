import { Link } from "react-router-dom";
import "./leftbar.scss";
import { BsGlobeAsiaAustralia } from "react-icons/bs";
import { BiMaleFemale } from "react-icons/bi";
import { FaChild } from "react-icons/fa";
import { GiPeaceDove } from "react-icons/gi";
import { BiPlanet } from "react-icons/bi";
import { IoArrowBackOutline } from "react-icons/io5";
import { FaHandsHoldingChild } from "react-icons/fa6";

const Leftbar = ({ handleCategory }) => {
  return (
    <div className="main-left">
      <div className="leftbar">
        <Link to="/" className="logo">
          <div className="back-icon">
            <IoArrowBackOutline />{" "}
          </div>
          <p> DİM üzrə göstəricilər</p>
        </Link>

        <button onClick={handleCategory} value="" className="navigation">
          <BsGlobeAsiaAustralia className="nav-icon" />
          Ümumi
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
          Uşaq
        </button>
        <button onClick={handleCategory} value="Peace" className="navigation">
          <GiPeaceDove className="nav-icon" />
          Sülh
        </button>
        <button onClick={handleCategory} value="Planet" className="navigation">
          <BiPlanet className="nav-icon" />
          Dünya
        </button>
        <button onClick={handleCategory} value="Welfare" className="navigation">
          <FaHandsHoldingChild className="nav-icon" />
          Sosial rifah
        </button>
      </div>
      <div className="languages">
        <button>EN</button>
        <button>AZ</button>
      </div>
    </div>
  );
};

export default Leftbar;
