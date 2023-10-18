import {
  Button,
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
import { useAuth } from "../context/useAuth";
import { posterPath } from "../services/api";

const UserFavoriteCard = ({
  watchitem,
  addWatchedMedia,
  removeFromWatchList,
}) => {
  const setWatched = () => {
    addWatchedMedia(watchitem);
  };

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
          watchitem?.poster_path || watchitem?.backdrop_path
            ? `${posterPath}/${
                watchitem?.poster_path || watchitem?.backdrop_path
              }`
            : "https://i.imgur.com/VmaMQZo.jpg"
        }
        alt="movie/show poster"
      />

      <Stack bg={"#085E7D"}>
        <Flex align={"center"} flexDir={"column"}>
          <CardBody>
            <Heading size="md">
              {watchitem
                ? watchitem?.title ||
                  watchitem?.original_title ||
                  watchitem?.name
                : "There has been an error with the title, we're sorry!"}
            </Heading>

            <Text py="2" textAlign={"justify"}>
              {watchitem ? watchitem?.overview : "Fren"}
            </Text>
          </CardBody>

          <CardFooter gap={"4"}>
            <Flex
              flexDir={"column"}
              gap={"2"}
              justifyContent={"center"}
              align={"center"}
            >
              <Button
                onClick={setWatched}
                border={"1px solid #fff"}
                color={"#fff"}
                bg={"#008E89"}
                _hover={{ backgroundColor: "#084594", color: "#fff" }}
                minW={"fit-content"}
              >
                Watched that!
              </Button>
              <Button
                onClick={() => removeFromWatchList(watchitem?.id?.toString())}
                border={"1px solid #fff"}
                color={"#fff"}
                bg={"#008E89"}
                _hover={{ backgroundColor: "#084594", color: "#fff" }}
                minW={"fit-content"}
                w={"100%"}
              >
                Remove
              </Button>
            </Flex>
          </CardFooter>
        </Flex>
      </Stack>
    </Card>
  );
};

export default UserFavoriteCard;
