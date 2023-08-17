import React from 'react'
import LeftBar from '../../components/Leftbar/Leftbar'
import Main from '../../components/Main/Main'
import Rightbar from '../../components/Rightbar/Rightbar'
import './sdg.scss'
const SDG = () => {
  return (
    <div className='sdg-container'>
     <LeftBar/>
     <Main/> 
     <Rightbar/>
    </div>
  )
}

export default SDG
