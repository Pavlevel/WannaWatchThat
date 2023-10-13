import {
  Card,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { posterPath } from "../services/api";

const UserWatchedCard = ({ watcheditem }) => {
  // console.log(watcheditem, "you rang?");
  return (
    <Card
      my={"4"}
      p={"4"}
      bg={"#085E7D"}
      direction={{ base: "column", sm: "row" }}
      maxW={"75%"}
      overflow="hidden"
      variant="outline"
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "200px" }}
        src={
          watcheditem?.poster_path || watcheditem?.backdrop_path
            ? `${posterPath}/${
                watcheditem?.poster_path || watcheditem?.backdrop_path
              }`
            : "https://i.imgur.com/VmaMQZo.jpg"
        }
        alt="Caffe Latte"
      />

      <Stack bg={"#085E7D"}>
        <CardBody>
          <Heading size="md">
            {watcheditem
              ? watcheditem?.title ||
                watcheditem?.original_title ||
                watcheditem?.name
              : "Henlo"}
          </Heading>

          <Text py="2" textAlign={"justify"}>
            {watcheditem?.overview}
          </Text>
        </CardBody>

        <CardFooter gap={"4"}>
          <Flex flexDir={"column"} gap={"2"} justifyContent={"center"}></Flex>
        </CardFooter>
      </Stack>
    </Card>
  );
};

export default UserWatchedCard;
