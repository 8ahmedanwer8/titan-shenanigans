import React from "react";
import { Box, Image, Badge } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
const defaultPic = require("../assets/isayama.png");

const property = {
  imageUrl: "https://bit.ly/2Z4KKcF",
  imageAlt: "Rear view of modern home with pool",
  beds: 3,
  baths: 2,
  title: "Modern home in city center in the heart of historic Los Angeles",
  formattedPrice: "$1,900.00",
  reviewCount: 34,
  rating: 4,
};

const TitansCarousel = ({ src, name, height }) => {
  return (
    <Box w={192} borderWidth="10px" borderRadius="lg">
      <img src={src} alt={property.imageAlt} />

      <Box bg="white" p={4}>
        <Box display="flex" alignItems="baseline"></Box>

        <Box fontWeight="semibold" as="h4" lineHeight="tight" noOfLines={1}>
          {name}
        </Box>

        <Box>
          {height}
          <Box as="span" color="gray.600" fontSize="sm">
            {" "}
            meters
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TitansCarousel;
