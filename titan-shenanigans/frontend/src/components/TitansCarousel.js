import React from "react";
import Carousel from "react-elastic-carousel";
const defaultPic = require("../assets/isayama.png");
var items = [
  {
    id: "62de092abef940227a3ba144",
    name: "Warhammer Titan",
    pic: "./assets/isayama.png",
    height: 30,
  },
  {
    id: "62de092abef940227a3ba144",
    name: "Warhammer Titan",
    pic: "./assets/isayama.png",
    height: 30,
  },
  {
    id: "62de092abef940227a3ba144",
    name: "Warhammer Titan",
    pic: "./assets/isayama.png",
    height: 30,
  },
  {
    id: "62de092abef940227a3ba144",
    name: "Warhammer Titan",
    pic: "./assets/isayama.png",
    height: 30,
  },
  {
    id: "62de092abef940227a3ba144",
    name: "Warhammer Titan",
    pic: "./assets/isayama.png",
    height: 30,
  },
];

const TitansCarousel = () => {
  return (
    <Carousel>
      <div>1</div>
      <div>1</div>

      {items.map((item) => (
        <div>
          <img width="300" height="200" src={defaultPic} />
        </div>
      ))}
      {/* <div>{items.map((item) => item.name)}</div> */}
    </Carousel>
  );
};

export default TitansCarousel;
