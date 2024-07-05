import { ArrowBackIcon } from '@chakra-ui/icons'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Setting(props) {
    const navigate=useNavigate();
  return (
    <div>
      <nav className="setting-navbar">
      <ArrowBackIcon onClick={()=>navigate("/")}/>
        <h1>Setting</h1>
        </nav>
        <button onClick={props.tog}>Toggle theme</button>
    </div>
  )
}
