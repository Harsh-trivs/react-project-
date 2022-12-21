
import { useState } from 'react';
import './App.css';
import AlertMessage from './components/AlertMessage';
import Navbar from './components/Navbar';
import Textfeild from './components/Textfeild';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
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
    <Navbar title="Textme" link="click me" mode={mode} OnclickColour={OnclickColour} passAlert={passAlert}/>
    <AlertMessage alert={alert}/>
   
    <Switch>
          <Route path="/carousel">
            <Carousel/>
          </Route>
          
          <Route path="/">
          <Textfeild mode={mode} passAlert={passAlert}/>
          </Route>
        </Switch>
        </Router>
    </>
  );
}

export default App;
