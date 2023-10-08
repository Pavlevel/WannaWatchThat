import React from "react";
import { Link } from "react-router-dom";
import { posterPath } from "../services/api";
import {
  Box,
  Button,
  Container,
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
} from "@chakra-ui/react";

const MediaCard = ({ med }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  console.log(med, "med");
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
              : "https://t4.ftcdn.net/jpg/04/00/24/31/360_F_400243185_BOxON3h9avMUX10RsDkt3pJ8iQx72kS3.jpg"
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
            <Text fontSize={"sm"} color={"#000"}>
              Rating out of 10: {med?.vote_average}
            </Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <iframe
              height="400px"
              width="400px"
              src={``}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>

            <Text mt={"2"} color={"#000"}>
              {med?.overview}
            </Text>
          </ModalBody>

          <ModalFooter justifyContent={"center"}>
            <Button color={"#fff"} bg={"#008E89"} mr={3}>
              Add to favorites!
            </Button>
            <Button color={"#fff"} bg={"#084594"} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default MediaCard;
