
import './App.css'
import GameStarted from './components/GameStarted';
import HomePage from './components/HomePage'
import { useState } from 'react'
function App() { 
const [isStarted, setIsStarted]= useState(false);

const toggleGame=()=>{
  setIsStarted(prev=>!prev);
};
  return (
   <div>
    {isStarted?<GameStarted />:<HomePage toggle = {toggleGame}/>}
   </div>
  )
}

export default App
