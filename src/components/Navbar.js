import React from 'react'



export default function Navbar(props) {
 
  return (
   <>
   <nav className={`navbar navbar-expand-lg bg-${props.mode==='dark'?'dark':'primary'} text-${props.mode==='dark'?'light':'dark'}`}>
  <div className="container-fluid" >
    <a className={`navbar-brand text-${props.mode==='dark'?'light':'dark'}`}  href="/" >{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className={`nav-item `}>
          <a className={`nav-link active text-${props.mode==='dark'?'light':'dark'}`} aria-current="page" href="/" >Home</a>
        </li>
        <li className={`nav-item`}>
          <a className={`nav-link text-${props.mode==='dark'?'light':'dark'}`} href="/">{props.link}</a>
        </li>
       
        
      </ul>
        <button className={`btn btn-${props.mode} text-${props.mode==='dark'?'light':'dark'}`} onClick={props.OnclickColour}>{props.mode==='light'?'Enable dark mode':'Enable light mode'
}</button>
    </div>
  </div>
</nav>
   </>
  )
}

