import React from 'react'
import "./experts.scss"
import { Link } from 'react-router-dom'
import profileimg from '../assets/profile.jpeg'
const Experts = () => {
  return (
    <div className='expertcontainer'>

      <div className='expert'>
        <img className='profileimg' src={profileimg} alt="" />
        <h2>Ninad Naik - (BSC Agri) </h2><p>Crop Pesticide Expert</p>

        <button className="meetbtn" onClick={() => { }}><Link to="http://192.168.138.51:3000/" className="m-2">Talk with Ninad Naik</Link></button>
      </div>
      <div className='expert'>
        <img className='profileimg' src={profileimg} alt="" />
        <h2>Dr. Vandana Shiva </h2><p>Environmental Activist and Author</p>

        <button className="meetbtn" onClick={() => { }}><Link to="http://192.168.138.51:3000/" className="m-2">Talk with Dr. Vandana Shiva</Link></button>
      </div>
      <div className='expert'>
        <img className='profileimg' src={profileimg} alt="" />

        <h2>Dr. Norman Borlaug </h2><p>Agronomist and Nobel Laureate</p>

        <button className="meetbtn" onClick={() => { }}><Link to="http://192.168.137.1:3000/" className="m-2">Talk with Dr. Norman Borlaug</Link></button>
      </div>
      <div className='expert'>
        <img className='profileimg' src={profileimg} alt="" />
        <h2>Dr. Devinder Sharma </h2><p>Agricultural Economist and Food Policy Analyst</p>

        <button className="meetbtn" onClick={() => { }}><Link to="http://192.168.137.1:3000/" className="m-2">Talk with Dr. Devinder Sharma</Link></button>
      </div>
    </div>
  )
}

export default Experts