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
                <div className="row">
                  <div className="col-sm-6 ">
                <textarea className={`form-control my-2  bg-${props.mode==='dark'?'dark':'light'} text-${props.mode==='dark'?'light':'dark'}`} id="exampleFormControlTextarea1" rows="10" value={Text} onChange={OnchangeHandler}></textarea>
                </div>
                <div className="col-sm-6 ">
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                        <div className="carousel-indicators">
                          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                          <div className="carousel-item active">
                            <img src="https://images.unsplash.com/photo-1517345438041-cf88a04b4689?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className="d-block w-100" alt="..."/>
                          </div>
                          <div className="carousel-item">
                            <img src="https://images.unsplash.com/photo-1517345438041-cf88a04b4689?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className="d-block w-100" alt="..."/>
                          </div>
                          <div className="carousel-item">
                            <img src="https://images.unsplash.com/photo-1517345438041-cf88a04b4689?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className="d-block w-100" alt="..."/>
                          </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                          <span className="carousel-control-next-icon" aria-hidden="true"></span>
                          <span className="visually-hidden">Next</span>
                        </button>
                      </div>
                </div>
                </div>
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
