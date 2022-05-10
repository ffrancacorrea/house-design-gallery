import React from "react";
import styled from "@emotion/styled";
import coverHouse from "../../assets/coverHouse.jpg";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(
      to left bottom,
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.2)
    ),
    url(${coverHouse});
  margin: 0;
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
`;
const Content = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 40vh;
  text-align: center;
  color: white;
  h1 {
    font-family: "Dancing Script", cursive;
    font-weight: bold;
    font-style: normal;
    font-size: 500%;
  }
`;
const Card = styled.div`
  display: flex;
  align-self: center;
  justify-content: center;
  background-color: #1d2024;
  width: 30%;
  cursor: pointer;
  margin-top: 41vh;
  border-radius: 2px;
  box-shadow: 6px 7px 15px -2px rgba(0, 0, 0, 0.75);
  h3 {
    text-align: center;
    color: white;
    padding: 35px;
    font-family: "Dancing Script", cursive; // TODO change font
    font-weight: normal;
    font-style: normal;
  }
`;

const Header = () => {
  return (
    <Wrapper>
      <Content>
        <h1>Wonderful Houses Gallery</h1>
      </Content>
      <Card>
        <h3>Check out more houses bellow</h3>
      </Card>
    </Wrapper>
  );
};

export default Header;
