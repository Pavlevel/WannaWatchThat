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

const DasbhoardCard = ({ watchitem }) => {
  const { user, uid } = useAuth();
  // console.log(whatchlist);

  const removeFromWatchList = async (movieID) => {
    try {
      if (!user) {
        console.log("No user found!");
        // throw new Error("No user found!");
      }

      const userFavouritesCollection = collection(
        db,
        "favorites",
        uid,
        "UserFavorites"
      );
      const movieDocRef = doc(userFavouritesCollection, movieID);
      await deleteDoc(movieDocRef);
      toast({
        title: "Success",
        description: "Movie removed from watch list.",
        status: "success",
        duration: 4500,
        position: "top",
        isClosable: true,
      });

      const filterWatchlist = whatchlist?.filter(
        (movie) => movie?.id?.toString() !== movieID?.toString()
      );
      setWatchlist(filterWatchlist);
    } catch (error) {
      console.log(error, "error removing movie from wathclist");
    }
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
        src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
        alt="Caffe Latte"
      />

      <Stack bg={"#085E7D"}>
        <CardBody>
          <Heading size="md">
            {watchitem
              ? watchitem?.title || watchitem?.original_title
              : "Henlo"}
          </Heading>

          <Text py="2">{watchitem ? watchitem?.overview : "Fren"}</Text>
        </CardBody>

        <CardFooter gap={"4"}>
          <Flex flexDir={"column"} gap={"2"} justifyContent={"center"}>
            <Button
              border={"1px solid #fff"}
              color={"#fff"}
              bg={"#008E89"}
              _hover={{ backgroundColor: "#084594", color: "#fff" }}
            >
              Watched that!
            </Button>
            <Button
              onClick={removeFromWatchList}
              border={"1px solid #fff"}
              color={"#fff"}
              bg={"#008E89"}
              _hover={{ backgroundColor: "#084594", color: "#fff" }}
            >
              Remove from Watchlist
            </Button>
          </Flex>
        </CardFooter>
      </Stack>
    </Card>
  );
};

export default DasbhoardCard;
