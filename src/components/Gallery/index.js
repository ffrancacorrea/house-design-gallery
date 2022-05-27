import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import houses from "./houses";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  width: 100%;
  height: 100vh;
  background-color: #0b0e12;
`;

const GallerySection = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0;
  border: 2px solid white;
  width: 80%;
  height: 80vh;
  background-color: #0b0e12;
  overflow: hidden;
`;

const Slider = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  margin: 0;
  transition: 1s;
  left: ${({ selected }) =>
    (selected === 0 && "20%") ||
    (selected === 1 && "10%") ||
    (selected === 2 && "0%") ||
    (selected === 3 && "-30%") ||
    (selected === 4 && "-60%") ||
    (selected === 5 && "-70%") ||
    (selected === 6 && "-80%")};
`;

const Card = styled.div`
  margin: ${({ selected }) =>
    (selected && "-40px -10px -40px -20px") || "10px"};
  width: 100%;
  height: ${({ selected }) => (selected ? "500px" : "400px")};
  z-index: ${({ selected }) => selected && "2"};
  cursor: pointer;
  border: 3px solid white;
  img {
    filter: ${({ selected }) => !selected && "brightness(30%)"};
    height: 100%;
    object-fit: cover;
  }
`;

const Gallery = () => {
  const [selected, setSelected] = useState(2);

  useEffect(() => {
    console.log(selected);
  }, [selected]);

  return (
    <Wrapper>
      <GallerySection>
        <Slider selected={selected}>
          {houses.map((house, index) => (
            <Card
              number={index}
              image={house.image}
              onClick={() => setSelected(index)}
              selected={selected === index}
            >
              <img src={house.image} alt="house"></img>
            </Card>
          ))}
        </Slider>
      </GallerySection>
    </Wrapper>
  );
};

export default Gallery;
