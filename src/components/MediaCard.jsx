import React, { useEffect, useState } from "react";
import { posterPath, getTrailer } from "../services/api";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useAuth } from "../context/useAuth";
import { db } from "../firebase";
import { doc, collection, getDoc, setDoc } from "firebase/firestore";

const MediaCard = ({ med, type }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user, uid } = useAuth();
  const [video, setVideo] = useState(null);
  const [isInWatchList, setIsInWatchList] = useState(false);
  const toast = useToast();

  const userFavoritesCollection = collection(db, "favorites");

  const id = med?.id;

  useEffect(() => {
    getTrailer(type, id).then((res) => {
      const { results } = res;
      const resolveVideoType = results?.find(
        (movie) => movie?.type === "Trailer" && movie?.official === true
      );
      if (resolveVideoType) {
        setVideo(resolveVideoType.key);
      }
    });
  }, []);

  const addFavoriteMedia = async (media) => {
    // console.log(media?.id, "media", uid, 'UID');
    try {
      if (!user) {
      }
      const userDocRef = doc(userFavoritesCollection, uid);
      const favoritesCol = collection(userDocRef, "UserFavorites");
      const mediaDoc = doc(favoritesCol, media?.id?.toString());

      const docSnap = await getDoc(mediaDoc);

      if (docSnap.exists()) {
        toast({
          position: "error",
          title: "Uh-oh!",
          description: `Already in your favorites`,
          status: "error",
          duration: 4500,
          isClosable: true,
        });
      } else {
        await setDoc(mediaDoc, media);
        setIsInWatchList(true);
        toast({
          colorScheme: "teal",
          position: "bottom",
          title: "Yay!",
          description: "Saved to watchlist",
          status: "success",
          duration: 4500,
          isClosable: true,
        });
      }
    } catch (error) {}
  };

  const handleFavorite = () => {
    if (!user) {
      toast({
        position: "bottom",
        title: "Uh-oh!",
        description: `Please log in to save to your favorites.`,
        status: "error",
        duration: 4500,
        isClosable: true,
      });
    } else {
      addFavoriteMedia(med);
    }
  };

  return (
    <div className="card">
      <Flex
        border={"1px"}
        borderRadius={"md"}
        bg="blackAlpha.200"
        flexDir={"column"}
        justifyContent={"center"}
      >
        <Image
          src={
            med?.poster_path || med?.backdrop_path
              ? `${posterPath}/${med?.poster_path || med?.backdrop_path}`
              : "https://i.imgur.com/VmaMQZo.jpg"
          }
          alt={med?.title || med?.name}
          borderRadius={"md"}
          borderBottomRadius={"none"}
          objectFit={"cover"}
          w="full"
          height={"300px"}
        />
        <Box p="2">
          <Text fontSize="sm" textAlign="center">
            {med?.title || med?.name}
          </Text>
        </Box>
        <Button
          w={"full"}
          textAlign={"center"}
          onClick={onOpen}
          bg={"#008E89"}
          variant={"unstyled"}
          borderBottomRadius={"md"}
          borderTopRadius={"none"}
          borderTop={"1px solid #fff"}
          _hover={{ backgroundColor: "#084594" }}
        >
          See details!
        </Button>
      </Flex>

      <Modal size={"xl"} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent p={"1"}>
          <ModalHeader color={"#000"}>
            <Heading as={"h2"} size={"md"} color={"#000"}>
              {med?.title || med?.name}
            </Heading>
            <Text mt={"2"} fontSize={"sm"} color={"#000"}>
              Release date:{" "}
              {med?.release_date || med?.first_air_date
                ? new Date(
                    med?.release_date || med?.first_air_date
                  ).toLocaleDateString("sr-Latn-RS")
                : "No release date available, sorry!"}
            </Text>
            <Text fontSize={"sm"} color={"#000"}>
              Rating: {med?.vote_average?.toFixed(2)}/10
            </Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody justifyContent={"center"}>
            <Flex w={"full"} justifyContent={"center"}>
              {video ? (
                <iframe
                  src={`https://www.youtube.com/embed/${video}`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
              ) : (
                <Image src="https://i.imgur.com/jDewYGo.png" />
              )}
            </Flex>
            <Text mt={"3"} color={"#000"} textAlign={"justify"}>
              {med?.overview}
            </Text>
          </ModalBody>

          <ModalFooter justifyContent={"center"}>
            <Button
              isDisabled={isInWatchList === true}
              color={"#fff"}
              bg={"#008E89"}
              mr={3}
              onClick={handleFavorite}
              _hover={{
                backgroundColor: "#084594",
              }}
            >
              {isInWatchList ? "In Watchlist" : "Add To Watchlist"}
            </Button>
            <Button
              color={"#fff"}
              bg={"#008E89"}
              _hover={{
                backgroundColor: "#084594",
              }}
              onClick={onClose}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default MediaCard;
