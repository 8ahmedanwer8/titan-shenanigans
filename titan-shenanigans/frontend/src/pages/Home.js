import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Box, Text } from "@chakra-ui/react";
import TitansCarousel from "../components/TitansCarousel";
import HumansCarousel from "../components/HumansCarousel";

const Home = () => {
  const [titans, setTitans] = useState([]);
  const [humans, setHumans] = useState([]);

  const fetchTitans = async () => {
    const { data } = await axios.get("/titans");
    console.log(data);
    setTitans(data);
  };
  const fetchHumans = async () => {
    const { data } = await axios.get("/humans");
    setHumans(data);
  };

  useEffect(() => {
    fetchTitans();
    fetchHumans();
  }, []);
  return (
    <Container maxW="xl" centerContent>
      <Box d="flex" justifyContent="center" p={3}>
        <Text
          fontSize="4xl"
          fontWeight="extrabold"
          fontFamily="Work Sans"
          color="white"
        >
          Titan Shenanigans
        </Text>
      </Box>
      <Container>
        <TitansCarousel />
      </Container>
      <Container>
        <HumansCarousel />
      </Container>
    </Container>
  );
  //   return (
  //     <div>
  //       {titans.map((titan) => (
  //         <div key={titan._id}>{titan.name}</div>
  //       ))}
  //       {humans.map((human) => (
  //         <div key={human._id}>{human.name}</div>
  //       ))}
  //     </div>
  //   );
};

export default Home;
