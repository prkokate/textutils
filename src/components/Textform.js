import React,{useState} from "react";



let flag=0;
export default function Textform(props) {
    const [text,settext]=useState("");
    const [butt,setbutt]=useState("To upper case 🔺");
    const [alrt,setalrt]=useState({
      display:"none"
    });
    // const [abletext,setable]=useState({
    //   "pointer-events": "all"
    // })
    const [fortxt,setfor]=useState("textbox");
    const [len,setlen]=useState(0);


    const handleUpcase =()=>{
      if(flag===0){

        console.log("Uppercase of "+text);
        let newtext=text.toUpperCase();
        settext(newtext);
        let newbutt="To lower case🔻" ;
        setbutt(newbutt);
        flag=1;
      }

      else{
        console.log("Lowercase of "+text);
        let newtext=text.toLowerCase();
        settext(newtext);
        let newbutt="To upper case 🔺" ;
        setbutt(newbutt);
        flag=0;
      }
      
    }

    const handleChange=(event)=>{
        console.log("Change handled");
        settext(event.target.value);
        setlen(event.target.value.split(" ").length);
    }

    const clearCase=()=>{
     
      setalrt({
        display:"block"
      });
     
      document.getElementById("textbox").disabled=true;

      setfor("");
   

    }
    const clearCase2=()=>{
      settext('');
      setlen(0);
      setalrt({
        display:"none"
      })

      document.getElementById("textbox").disabled=false;
      setfor("textbox");
      

    }
    const cancelCase=()=>{
      setalrt({
        display:"none"
      })
      
      document.getElementById("textbox").disabled=false;
      setfor("textbox");

    }
 
    
   

  return (
    <>
    <div className="container" >
      <div id="alert" style={alrt}>
      <span id="btns" ><h2>ALERT! : Confirm Deletion </h2><button id="yes" onClick={clearCase2} >✔ </button> <button onClick={cancelCase} id="cancel">❌ </button> </span>
      </div>
      <label htmlFor={fortxt}>
        <h2>{props.title}</h2>
      </label>
      <textarea placeholder="Enter Text Here" id="textbox" value={text}  onChange={handleChange}  /><br />
      <button id="submitbut" onClick={handleUpcase} >{butt}</button> 
      <span> <button className="clear" onClick={clearCase} >CLEAR ❌</button> </span>
        
    </div>

    <div className="container">
        <h1>Your text details</h1>
        <p> {len} words and {text.length} characters. </p>
    </div>
    </>
  )
}
