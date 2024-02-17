import React from 'react'
import styled from 'styled-components'
import TotalScore from './TotalScore'
import BoxArray from './BoxArray'
import { useState } from 'react'
const GameStarted = () => {
  const [dice, setDice] = useState(1);
  const [number, setNumber] = useState();
  const [score, setScore] = useState(0);
  const [error, setError] = useState("");
  let generateRandom=(min,max)=>{
  return Math.floor(Math.random()*(max-min)+min);
  }
  return (
    <Main>
      <div className='score'>
     <TotalScore score={score}/>
       <BoxArray number={number} setNumber={setNumber} error={error}/>
      </div>
      <div className='diceImage'>
      <img src={`./src/assets/dice_${dice}.png`} alt="Dice" onClick={ ()=>{
        setDice( generateRandom(1,7) );
        setScore(number==dice?number+score:score-2); 
        setNumber(undefined); 
      } } />
      </div>
      <h1>Click to roll</h1>
      <button onClick={()=>setScore(0)} style={{backgroundColor:'black', color:'white', height:'40px', width:'100px', borderRadius:'5px'}}>Reset</button>
    </Main>
  )
}
const Main=styled.div`
    max-height: 100vh;
    max-width: 100vw;
    overflow: hidden;
    text-align: center;
    .score{
      width: 100vw;
      height: 30%;
      display: flex;
      justify-content: space-around;
    }
    .diceImage{
      height: 50%;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

`
export default GameStarted
