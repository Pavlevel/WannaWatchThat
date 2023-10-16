import React, { useEffect, useState } from "react";
import MediaCard from "../components/MediaCard";
import ChangePage from "../components/ChangePage";
import {
  Box,
  SimpleGrid,
  Skeleton,
  Input,
  Heading,
  Text,
} from "@chakra-ui/react";
import { getAllMedia } from "../services/api";

const Search = () => {
  const [media, setMedia] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [query, setQuery] = useState("");

  useEffect(() => {
    getAllMedia(query, currentPage)
      .then((res) => {
        setMedia(res?.results);
        setCurrentPage(res?.page);
        setTotalPages(res?.total_pages);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [query, currentPage]);

  return (
    <Box py={"4"}>
      <Heading mt={"4"} textAlign={"center"}>
        Search for movies and tv shows:
      </Heading>
      <Input
        my={"4"}
        height={"8"}
        onChange={(e) => setQuery(e.target.value)}
        name="searchBar"
        bg={"#008E89"}
        variant="unstyled"
        border={"1px solid #FFF"}
        p={"1"}
      ></Input>

      <SimpleGrid minChildWidth={"250px"} justifyItems={"center"} gap={"4"}>
        {media?.map((med) => (
          <MediaCard key={med?.id} med={med} type={med?.media_type} />
        ))}
      </SimpleGrid>

      {query ? (
        <ChangePage
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
        />
      ) : (
        <Text mt={"4"} textAlign={"center"}>
          The results will appear here as soon as you start typing 😊
        </Text>
      )}
    </Box>
  );
};

export default Search;
