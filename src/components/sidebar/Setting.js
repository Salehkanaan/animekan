import { ArrowBackIcon } from '@chakra-ui/icons'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Switch from '../Switch/Switch';
import Weather from '../weather/Weather';
import { auth, db } from "../../lib/firebase";
export default function Setting(props) {
  const navigate = useNavigate();
  const [weather,setWeather]=useState(false);

  const logout=()=>{
    navigate('/')
  return auth.signOut();
  }
  return (
    <>
      <nav className="setting-navbar">
        <ArrowBackIcon onClick={() => navigate("/")} />
        <h1>Setting</h1>

      </nav>
      <div className="switch1" onClick={props.tog}>
      Light<Switch />Dark
      </div>
     <button onClick={()=>navigate("/weather")}>Check Weather Today</button>
   <button onClick={logout}>LogOut</button>
    </>
  )
}
