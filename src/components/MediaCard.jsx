import React from "react";
import { Link } from "react-router-dom";
import { posterPath } from "../services/api";
import { Box, Image, Text } from "@chakra-ui/react";

const MediaCard = ({ med, type }) => {
  return (
    <div className="card">
      <Link to={`/${type}/${med?.id}`}>
        <Box border={"1px"} borderRadius={"lg"} bg="blackAlpha.300">
          <Image
            src={`${posterPath}/${med?.poster_path || med?.backdrop_path}`}
            alt={med?.title || med?.name}
            borderRadius={"lg"}
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
        </Box>
      </Link>
    </div>
  );
};

export default MediaCard;
