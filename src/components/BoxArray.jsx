import React from "react";
import styled from "styled-components";
const BoxArray = ({number, setNumber}) => {
  const Arr = [1, 2, 3, 4, 5, 6];
  return (
    <div style={{display:'flex', gap:'10px'}}>
      {Arr.map((value, i) => {
        return (
          <>
          <Box key={i} 
          onClick={() => setNumber(value)} 
          isSelected = {value==number}
          >
            {value}
          </Box>
          </>
        );
      })}
    </div>
  );
};

const Box = styled.div`
  height: 50px;
  width: 50px;
  border: 2px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props)=>(props.isSelected?'black':'white')};
  color: ${(props)=>(!props.isSelected?'black':'white')};
`;
export default BoxArray;
