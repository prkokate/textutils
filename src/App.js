//  import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Switchh from './components/Switchh';
import About from './components/About';

import {
    BrowserRouter as Router,
    Routes,
    Route
  } from 'react-router-dom';
  


function App() {
   
    const [mystyle,setmystyle]=useState({
        background:"#ccc"
     })

    // const [mode,setmode]=useState({
    //     background:"rgb(31, 30, 30)",
    //     color:"azure"
    // })
 
     const toggle=()=>{
         if(mystyle.background==="#ccc"){
 
             setmystyle({background:"#2196F3"});
             setbgcol({
                background:"rgb(31, 30, 30)"
             })
             setnavbg({
                background:"azure",
                color:"rgb(31, 30, 30)"
             })

         }
         else{
             setmystyle({background:"#ccc"})
             setbgcol({
                background:"white"
             })
             setnavbg({
                background:"rgb(31, 30, 30)",
                color:"azure"
             })
         }

     } 


     const [bgcol,setbgcol]=useState({
        background:"white"
     })
     const [navbg,setnavbg]=useState({
        background:"rgb(31, 30, 30)",
        color:"azure"
     })


     


  return (
    
    <div style={bgcol} className="App">
    <Router>
     <Navbar bgcol={navbg}  title="Textutils" />
     <br /><br /><br /><br />
     <Routes>
          <Route exact path="/" element={<Textform title="Enter text here"/>} />
          
          <Route  exact path="/about" element={ <About />} />
           
    </Routes>
     
     
     <br /><br /><br /><br /><br /><br /><br />
     <h3>Dark mode</h3>
     <Switchh mystyle={mystyle} change={toggle} />
     <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
     </Router>
    </div>
  );
}

export default App;

