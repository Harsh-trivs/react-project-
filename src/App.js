
import { useState } from 'react';
import './App.css';
import AlertMessage from './components/AlertMessage';
import Navbar from './components/Navbar';
import Textfeild from './components/Textfeild';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Carousel from './components/Carousel';

function App() {
  const [mode, setMode] = useState('light');
  const OnclickColour=()=>{
   if(mode==='light')
   {
    setMode('dark');
    passAlert("Dark mode enabled","success");
   }  
   else
   {
    setMode('light');
    passAlert("Light mode enabled","success");
   }
  }

  const [alert,setAlert]=useState(null);
  const passAlert=(message,type)=>{
    setAlert({
     message:message,
     type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }
  return (
    <>
     <Router>
    <Navbar title="Textme" link="Carousel" mode={mode} OnclickColour={OnclickColour} passAlert={passAlert}/>
    <AlertMessage alert={alert}/>
   
    <Routes>
    <Route path="/" element={<Textfeild mode={mode} passAlert={passAlert} />} />
    <Route path="/carousel" element={<Carousel />} />
        </Routes>
        </Router>
    </>
  );
}

export default App;
