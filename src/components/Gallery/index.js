import { useState } from "react";
import styled from "@emotion/styled";
import { houses, interiors } from "./houses";
import images from "../../assets/images";

const Wrapper = styled.div`
  position: relative;
  background-image: url(${images.background});
  font-family: "Dancing Script";
  font-weight: bold;
`;

const Button = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  right: ${({ display }) => (display ? "-100px" : "0px")};
  top: 20px;
  padding: 5px 20px;
  background-color: white;
  border: 1px solid white;
  border-radius: 4px 0 0 4px;
  z-index: 2;
  transition: 1.2s ease-out;
  cursor: pointer;
`;

const GalleryWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0;
  width: 200%;
  height: 100vh;
`;

const GallerySection = styled.div`
  position: relative;
  display: flex;
  left: ${({ selected }) => (selected ? "-50%" : "0")};
  justify-content: center;
  flex-direction: column;
  margin: 0 2%;
  border: 2px solid white;
  width: 100%;
  height: 80vh;
  background-color: #1a1b1c;
  overflow: hidden;
  transition: 1s;
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
    (selected === 3 && "-10%") ||
    (selected === 4 && "-20%") ||
    (selected === 5 && "-30%") ||
    (selected === 6 && "-40%")};
`;

const Card = styled.div`
  margin: ${({ selected }) =>
    (selected && "-40px -20px -40px -20px") || "10px"};
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
  const [exteriorFocus, setExteriorFocus] = useState(2);
  const [interiorFocus, setInteriorFocus] = useState(2);
  const [selected, setSelected] = useState(0);

  return (
    <Wrapper>
      <Button display={selected === 1} onClick={() => setSelected(1)}>
        <span>i</span>
        <span>n</span>
        <span>t</span>
        <span>e</span>
        <span>r</span>
        <span>i</span>
        <span>o</span>
        <span>r</span>
      </Button>
      <Button display={selected === 0} onClick={() => setSelected(0)}>
        <span>e</span>
        <span>x</span>
        <span>t</span>
        <span>e</span>
        <span>r</span>
        <span>i</span>
        <span>o</span>
        <span>r</span>
      </Button>
      <GalleryWrapper>
        <GallerySection display={selected === 0} selected={selected}>
          <Slider selected={exteriorFocus}>
            {houses.map((house, index) => (
              <Card
                number={index}
                image={house.image}
                onClick={() => setExteriorFocus(index)}
                selected={exteriorFocus === index}
              >
                <img src={house.image} alt="house"></img>
              </Card>
            ))}
          </Slider>
        </GallerySection>
        <GallerySection display={selected === 1} selected={selected}>
          <Slider selected={interiorFocus}>
            {interiors.map((house, index) => (
              <Card
                number={index}
                image={house.image}
                onClick={() => setInteriorFocus(index)}
                selected={interiorFocus === index}
              >
                <img src={house.image} alt="house"></img>
              </Card>
            ))}
          </Slider>
        </GallerySection>
      </GalleryWrapper>
    </Wrapper>
  );
};

export default Gallery;
