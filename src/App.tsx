import { useState } from 'react'
import './App.css'
import StartGame from './components/StartGame'
import { GamePlay } from './components/GamePlay'


function App() {
  const [isGmaeStart, setisGamestart] = useState(false);
const toggleGamePlay =()=>{
  setisGamestart((prev) => !prev);
};


  return  <>{isGmaeStart? <GamePlay/> : <StartGame 
   toggle={toggleGamePlay} />} </>;
    
}


export default App
