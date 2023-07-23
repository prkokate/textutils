import React from 'react'
import PropTypes from 'prop-types'
import './Navbar.css'
import {Link} from 'react-router-dom'


export default function Navbar(props) {

  return (
    
      <div style={props.bgcol} className="Navbar">
      <ul>
        <h1>{props.title}</h1>
        <li><Link className='tagdiv' style={props.bgcol} to="/" >Home</Link></li>
        <li><Link className='tagdiv' style={props.bgcol}  to="/about" >About</Link></li>
        <li><Link className='tagdiv' style={props.bgcol}  to="/event" >About</Link></li>
        <li><Link className='tagdiv' style={props.bgcol}  to="/next" >About</Link></li>
      </ul>
     </div>
     
    
  )
}

Navbar.propTypes={
 title: PropTypes.string

}
