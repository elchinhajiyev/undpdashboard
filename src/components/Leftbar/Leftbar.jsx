import React from 'react'
import "./leftbar.scss"
import {BsGlobeAsiaAustralia} from "react-icons/bs"
import {BiMaleFemale} from 'react-icons/bi'
import {FaChild} from 'react-icons/fa'
import {GiPeaceDove} from 'react-icons/gi'
import {BiPlanet} from 'react-icons/bi'
const Leftbar = () => {
  return (
  <div className="main-left">
      <div className='leftbar'>
      <div className='logo'>
      Dashboad by SDG
      </div>
      <button className='navigation'>
        <div className="navigation-item">
        <BsGlobeAsiaAustralia className='nav-icon'/>General
        </div>
      </button>
      <button className='navigation'>
        <div className="navigation-item">
        <BiMaleFemale  className='nav-icon'/>Gender
        </div>
      </button>
      <button className='navigation'>
        <div className="navigation-item">
        <FaChild  className='nav-icon'/>Childhood
        </div>
      </button>
      <button className='navigation'>
        <div className="navigation-item">
        <GiPeaceDove  className='nav-icon'/>Peace
        </div>
      </button>
      <button className='navigation'>
        <div className="navigation-item">
        <BiPlanet  className='nav-icon'/>Planet
        </div>
      </button>
    </div>
    <div className="languages">
      <button>EN</button>
      <button>AZ</button>
    </div>
  </div>
  )
}

export default Leftbar 
