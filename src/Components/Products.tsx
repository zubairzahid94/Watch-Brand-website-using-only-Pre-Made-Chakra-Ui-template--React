"use client";

import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  chakra,
  Text,
  Tooltip,
  Center,
} from "@chakra-ui/react";
import React from "react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import Simple from "./ProductPage";

interface RatingProps {
  rating: number;
  numReviews: number;
}

const products = [
  {
    isNew: true,
    imageURL: "./watch1.png",
    name: "Wayfar Classic",
    price: 4.5,
    rating: 4.2,
    numReviews: 54,
  },
  {
    isNew: true,
    imageURL: "./watch2.png",
    name: "Swatch Panzo",
    price: 3.5,
    rating: 4.7,
    numReviews: 34,
  },
  {
    isNew: true,
    imageURL: "./watch.png",
    name: "Curren 8321",
    price: 5.0,
    rating: 4.8,
    numReviews: 14,
  },
  // Add more product data here for additional cards
];
function Rating({ rating, numReviews }: RatingProps) {
  return (
    <Box display="flex" alignItems="center" mr={"15px"}>
      {Array(5)
        .fill("")
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2;
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
                style={{ marginLeft: "1" }}
                color={i < rating ? "teal.500" : "gray.300"}
              />
            );
          }
          if (roundedRating - i === 0.5) {
            return <BsStarHalf key={i} style={{ marginLeft: "1" }} />;
          }
          return <BsStar key={i} style={{ marginLeft: "1" }} />;
        })}
      <Box as="span" ml="2" color="gray.600" fontSize="sm">
        {numReviews} review{numReviews > 1 && "s"}
      </Box>
    </Box>
  );
}
function ProductCard({ data }) {
  return (
    <Box
      bg={useColorModeValue("white", "gray.800")}
      maxW="sm"
      borderWidth="1px"
      rounded="lg"
      shadow="lg"
      position="relative"
      key={data.name}
      m={2}
      h="100%"
      display="flex"
      flexDirection="column"
      mr={"40px"}
    >
      {data.isNew && (
        <Circle
          size="10px"
          position="absolute"
          top={2}
          right={2}
          bg="red.200"
        />
      )}

      <Image
        src={data.imageURL}
        alt={`Picture of ${data.name}`}
        roundedTop="lg"
        h="50%"
        objectFit="cover" // Ensure the image fully covers its container
      />

      <Box p="6" flexGrow={1}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box
            fontSize="2xl"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            {data.name}
          </Box>
          <Tooltip
            label="Shop"
            bg="white"
            placement="top"
            color="gray.800"
            fontSize="1.2em"
          >
            <chakra.a href="src\Components\ProductPage.tsx" display="flex">
              <Icon as={FiShoppingCart} h={7} w={7} alignSelf="center" />
            </chakra.a>
          </Tooltip>
        </Box>

        <Flex justifyContent="space-between" alignContent="center">
          <Rating rating={data.rating} numReviews={data.numReviews} />
          <Box
            fontSize="2xl"
            color={useColorModeValue("gray.800", "white")}
            mt={2} // Adjusted margin top for spacing
          >
            <Box as="span" color="gray.600" fontSize="lg">
              £
            </Box>
            {data.price.toFixed(2)}
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

function ProductAddToCart() {
  return (
    <>
      <Flex w="full" flexWrap="wrap" justifyContent="center">
        {products.map((product) => (
          <ProductCard data={product} key={product.name} />
        ))}
      </Flex>
    </>
  );
}

export default ProductAddToCart;
