import './App.css';
import Header from './components/Header';
import Times from './components/Times';
import Credits from './components/Credits';
import ButtonDarkMode from './components/btnDarkMode';


import { useState } from 'react';


function App() {

  const [dark,setDark] = useState(false)
  const [day,setDay] = useState("Segunda")
  const [classe,setClasse] = useState("App")

  const changeDark =()=>{
    if(dark){
      setDark(false)
      setClasse("App")
    }
    else{
      setDark(true);
      setClasse("App_DarkMode")
    }
  }

  return (
      <>
          
            
          <div className={classe}>
                <ButtonDarkMode changeDark={changeDark}></ButtonDarkMode>
                <Header day={day}></Header>
                  <Times dark={dark} setDay={setDay}></Times>
                <hr></hr>
                <Credits dark={dark}></Credits>
            </div>
             
          
      </>
  );
}

export default App;
