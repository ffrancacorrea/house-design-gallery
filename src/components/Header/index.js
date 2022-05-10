import styled from "@emotion/styled";
import coverHouse from "../../assets/coverHouse.jpg";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #0b0e12;
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
const BottomWave = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
  svg {
    position: relative;
    display: block;
    width: calc(113% + 1.3px);
    height: 90px;
  }
  .shape-fill {
    fill: #0b0e12;
  }
`;
const Card = styled.div`
  display: flex;
  align-self: center;
  justify-content: center;
  background: linear-gradient(to left bottom, #1f304d, #0b0e12);
  width: 35%;
  cursor: pointer;
  margin-top: 41vh;
  border-radius: 2px;
  box-shadow: 6px 7px 15px -2px rgba(0, 0, 0, 0.75);
  z-index: 1;
  :hover {
    transform: scale(1.02);
    transition: 0.5s;
  }
  h3 {
    text-align: center;
    color: white;
    font-weight: bold;
    font-size: 250%;
    padding: 40px;
    font-family: "Dancing Script", cursive;
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
      <BottomWave>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="shape-fill"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="shape-fill"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="shape-fill"
          ></path>
        </svg>
      </BottomWave>
      <Card>
        <h3>Check out our gallery bellow</h3>
      </Card>
    </Wrapper>
  );
};

export default Header;
