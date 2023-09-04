import React from 'react'
import inff from '../../assets/funded_logo/inff.png'
import joint from '../../assets/funded_logo/joint.png'
import undp from '../../assets/funded_logo/undp.png'
import {Link} from 'react-router-dom'
import './home.scss'
const Home = () => {
  return (
    <div className='home'>
      <div className="logo">
        <img src={joint} alt="joint" />
        <img src={inff} alt="inff" />
        <img src={undp} alt="undp" />
      </div>
      <div className="main-box">
        <p>Alignment of the 2023 Azerbaijan National Budget towards SDGs</p>
      </div>
      <div className="navigation">
        
        <Link to='/sdg' className='bysdg'> Dashboard by SDG</Link>
        <Link to='/sector' className='bysector'>Dashboard by Sector</Link>
        <Link to='/gender' className='gender'>Network Chart</Link>
        <div className='sdg16'>PPI Results</div>
      </div>
    </div>
  )
}

export default Home
