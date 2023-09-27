import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

const DasbhoardCard = () => {
  return (
    <Card
      my={"4"}
      bg={"#085E7D"}
      direction={{ base: "column", sm: "row" }}
      width={"75%"}
      overflow="hidden"
      variant="outline"
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "200px" }}
        src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
        alt="Caffe Latte"
      />

      <Stack bg={"#085E7D"}>
        <CardBody>
          <Heading size="md">The perfect latte</Heading>

          <Text py="2">
            Caffè latte is a coffee beverage of Italian origin made with
            espresso and steamed milk.
          </Text>
        </CardBody>

        <CardFooter gap={"4"}>
          <Button
            border={"1px solid #fff"}
            color={"#fff"}
            bg={"#008E89"}
            _hover={{ backgroundColor: "#084594", color: "#fff" }}
          >
            Remove from Watchlist
          </Button>
          <Button
            border={"1px solid #fff"}
            color={"#fff"}
            bg={"#008E89"}
            _hover={{ backgroundColor: "#084594", color: "#fff" }}
          >
            Watched that!
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
};

export default DasbhoardCard;
