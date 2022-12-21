import React, { useState } from 'react'


export default function Textfeild(props) {
    const [Text, setText] = useState('');
    // let myStyle={
    //   color:'white',
    //   backgroundColor:'black'
    // }

    const OnchangeHandler=(e)=>{
     
        setText(e.target.value);
      }
      const OnclkLower=()=>{
        if(Text==="")
        {props.passAlert("Text feild is empty please type in text to analyse it!","danger");}
        setText(Text.toLowerCase());
      }
      const onclkUpper=()=>{
        if(Text==="")
        {props.passAlert("Text feild is empty please type in text to analyse it!","danger");}
        setText(Text.toUpperCase());
      }
      const onclkReverse=()=>{
        // setText(Text.split(" ").reverse());
        if(Text==="")
        {props.passAlert("Text feild is empty please type in text to analyse it!","danger");}
        else{
       console.log(Text.split(" ").reverse())
       let newText=""
       for(let i=0;i<Text.split(" ").length;i++)
       {
        newText=newText+" "+Text.split(" ").reverse()[i];
       }  
       setText(newText);
      }
    }
    let fullHeight={
      position: 'absolute',
       height: '100%',
       width:'100%'
    }

  return (
    <>
    <div className={`text-${props.mode==='dark'?'light':'dark'} bg-${props.mode==='dark'?'black':'light'} container-fluid`} style={fullHeight}>
        <div className="container"  >
            <div className="mb-3">
                <h1>Enter text here</h1>
               <textarea className={`form-control my-2  bg-${props.mode==='dark'?'dark':'light'} text-${props.mode==='dark'?'light':'dark'}`} id="exampleFormControlTextarea1" rows="10" value={Text} onChange={OnchangeHandler}></textarea>
            </div>
            <button className={`btn btn-${props.mode==='dark'?'dark':'primary'} mx-2 text-${props.mode==='dark'?'light':'dark'}`} onClick={OnclkLower} >Convert to lowercase</button>
            <button className={`btn btn-${props.mode==='dark'?'dark':'primary'} mx-2 text-${props.mode==='dark'?'light':'dark'}`} onClick={onclkUpper} >Convert to uppercase</button>
            <button className={`btn btn-${props.mode==='dark'?'dark':'primary'} mx-2 text-${props.mode==='dark'?'light':'dark'}`} onClick={onclkReverse} >Reverse</button>
        <h2>Text Summary</h2>
        Words:{Text.split(" ").length} Character:{Text.length}
        <h3>Text preview</h3> 
        <p>{Text}</p>
        </div>
    </div>
    </>
  )
}
