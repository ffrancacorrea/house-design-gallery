import React from "react";
import styled from "@emotion/styled";
import coverHouse from "../../assets/coverHouse.jpg";

// TODO check fonts
const Wrapper = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap");
  display: flex;
  flex-direction: column;
  background-image: url(${coverHouse});
  margin: 0;
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
`;
const Content = styled.div`
  display: flex;
  justify-content: center;
  line-height: 100vh;
  text-align: center;
  color: white;
  h1 {
    font-family: "Dancing Script", cursive;
    font-weight: normal;
    font-style: normal;
  }
`;
const NavBar = styled.div``;
const Card = styled.div`
  display: flex;
  align-self: center;
  justify-content: center;
  background-color: #303540;
  width: 30%;
  height: 120px;
  margin-top: -10vh;
  border-radius: 2px;
  box-shadow: 6px 7px 15px -2px rgba(0, 0, 0, 0.75);
  h3 {
    text-align: center;
    color: white;
    margin-top: 60px;
    font-family: "Dancing Script", cursive;
    font-weight: normal;
    font-style: normal;
  }
`;

const Header = () => {
  return (
    <Wrapper>
      <NavBar></NavBar>
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
