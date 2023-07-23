import React, {useState} from 'react'
import './Switchh.css'


export default function Switchh(props) {
    // const [mystyle,setmystyle]=useState({
    //    background:"#ccc"
    // })

    // const toggle=()=>{
    //     if(mystyle.background==="#ccc"){

    //         setmystyle({background:"#2196F3"});
    //     }
    //     else{
    //         setmystyle({background:"#ccc"})
    //     }
    // } 

    
  return (

<label style={props.mystyle} id="switch">
      <input  onChange={props.change} type="checkbox"  />
      <span id="slider"></span>
</label>
    
  )
}
