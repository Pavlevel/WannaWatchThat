import React, { useEffect, useState } from "react";
import MediaCard from "../components/MediaCard";
import ChangePage from "../components/ChangePage";
import {
  Box,
  SimpleGrid,
  Skeleton,
  Flex,
  Input,
  IconButton,
  Heading,
} from "@chakra-ui/react";
import { getAllMedia } from "../services/api";
import { SearchIcon } from "@chakra-ui/icons";

const Search = () => {
  const [media, setMedia] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [query, setQuery] = useState("");

  useEffect(() => {
    setIsLoading(true);
    getAllMedia(query, currentPage)
      .then((res) => {
        setMedia(res?.results);
        setCurrentPage(res?.page);
        setTotalPages(res?.total_pages);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
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
        placeholder="Search a movie or show!"
        _placeholder={{
          color: "#FFF",
          textAlign: "center",
          fontStyle: "italic",
        }}
        variant="unstyled"
        border={"1px solid #FFF"}
        p={"1"}
      ></Input>

      <SimpleGrid minChildWidth={"250px"} justifyItems={"center"} gap={"4"}>
        {media?.map((med) =>
          isLoading ? (
            <Skeleton
              key={med?.id}
              borderRadius={"lg"}
              bg="blackAlpha.300"
              height={"300px"}
            />
          ) : (
            <MediaCard key={med?.id} med={med} type={med?.media_type} />
          )
        )}
      </SimpleGrid>
      <ChangePage
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </Box>
  );
};

export default Search;
