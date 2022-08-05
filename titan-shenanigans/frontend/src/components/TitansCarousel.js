import TitanCard from "./TitanCard";
import React from "react";
import Carousel from "react-elastic-carousel";
const a = require("../assets/titans/warhammerTitan.png");
const b = require("../assets/titans/attackTitan.png");
const c = require("../assets/titans/armoredTitan.png");
const d = require("../assets/titans/beastTitan.png");
const e = require("../assets/titans/cartTitan.png");
const f = require("../assets/titans/colossalTitan.png");
const g = require("../assets/titans/femaleTitan.png");
const h = require("../assets/titans/jawTitan.png");
const i = require("../assets/titans/foundingTitan.png");

var items = [
  {
    id: "62de092abef940227a3ba144",
    name: "Warhammer Titan",
    pic: a,
    height: 30,
  },
  {
    id: "62de092abef940227a3ba144",
    name: "Warhammer Titan",
    pic: b,
    height: 30,
  },
  {
    id: "62de092abef940227a3ba144",
    name: "Warhammer Titan",
    pic: c,
    height: 30,
  },
  {
    id: "62de092abef940227a3ba144",
    name: "Warhammer Titan",
    pic: d,
    height: 30,
  },
  {
    id: "62de092abef940227a3ba144",
    name: "Warhammer Titan",
    pic: e,
    height: 30,
  },
];
const breakPoints = [
  { width: 1, itemsToShow: 3 },
  { width: 300, itemsToShow: 1 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];
const TitansCarousel = () => {
  return (
    <Carousel pagination={false} breakPoints={breakPoints}>
      {items.map((item) => (
        <div>
          <TitanCard
            src={item.pic}
            name={item.name}
            height={item.height}
          ></TitanCard>
        </div>
      ))}
    </Carousel>
  );
};

export default TitansCarousel;
