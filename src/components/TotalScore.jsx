import React from 'react'
import styled from 'styled-components'
const TotalScore = ({score}) => {
  return (
    <TS className='totalScore'>
      <div className='heading'>
        {score}
    </div>
    <p>Total Score</p>
   </TS>
  )
}

const TS =  styled.div`
    border: 2px solid black;
    height: 150px;
    width: 150px;
    text-align: center;
   
    .heading{
       font-size: 5rem;
       margin-top: 0px;
    }
    `

export default TotalScore
