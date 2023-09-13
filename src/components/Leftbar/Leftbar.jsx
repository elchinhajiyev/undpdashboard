import { Link } from "react-router-dom";
import "./leftbar.scss";
import { BsGlobeAsiaAustralia } from "react-icons/bs";
import { BiMaleFemale } from "react-icons/bi";
import { FaChild } from "react-icons/fa";
import { GiPeaceDove } from "react-icons/gi";
import { BiPlanet } from "react-icons/bi";
import { IoArrowBackOutline } from "react-icons/io5";
import { FaHandsHoldingChild } from "react-icons/fa6";

const Leftbar = () => {
  return (
    <div className="main-left">
      <div className="leftbar">
        <Link to="/" className="logo">
          <div className="back-icon">
            <IoArrowBackOutline />{" "}
          </div>
          <p> DİM üzrə göstəricilər</p>
        </Link>

        <button className="navigation">
          <div className="navigation-item">
            <BsGlobeAsiaAustralia className="nav-icon" />
            Ümumi
          </div>
        </button>
        <button className="navigation">
          <div className="navigation-item">
            <BiMaleFemale className="nav-icon" />
            Gender
          </div>
        </button>
        <button className="navigation">
          <div className="navigation-item">
            <FaChild className="nav-icon" />
            Uşaq
          </div>
        </button>
        <button className="navigation">
          <div className="navigation-item">
            <GiPeaceDove className="nav-icon" />
            Sülh
          </div>
        </button>
        <button className="navigation">
          <div className="navigation-item">
            <BiPlanet className="nav-icon" />
            Dünya
          </div>
        </button>
        <button className="navigation">
          <div className="navigation-item">
            <FaHandsHoldingChild className="nav-icon" />
            Sosial rifah
          </div>
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
