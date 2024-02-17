import React from "react";
import styled from "styled-components";

const HomePage = ({toggle}) => {
  return (
    <Container>
      <div className="imageCont">
        <img src="./src/assets/dices.png" alt="" />
      </div>
      <div className="headingCont">
        <h1>DICE GAME</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
};

const Button = styled.button`
  height: 40px;
  width: 100px;
  box-sizing: border-box;
  background-color: black;
  color: white;
  border-radius: 5px;
  transition: 0.2s background ease-in;
  &:hover {
    background-color: white;
    border: 2px solid black;
    color: black;
    transition: 0.2s background ease-in;
    cursor: pointer;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  .imageCont {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .headingCont {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export default HomePage;
