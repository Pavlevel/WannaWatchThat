import { Box, Heading, Skeleton, SimpleGrid } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { getMovies } from "../services/api";
import MediaCard from "../components/MediaCard";
import SearchBar from "../components/SearchBar";
import ChangePage from "../components/ChangePage";

const Movies = () => {
  const [movie, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    getMovies(currentPage)
      .then((res) => {
        setMovies(res?.results);
        setCurrentPage(res?.page);
        setTotalPages(res?.total_pages);
      })
      .catch((err) => {})
      .finally(() => {
        setIsLoading(false);
      });
  }, [currentPage]);

  return (
    <Box py={"4"}>
      <Heading as={"h1"} py={"4"} textAlign={"center"}>
        Trending Movies:
      </Heading>

      <SimpleGrid minChildWidth={"250px"} justifyItems={"center"} gap={"4"}>
        {movie?.map((mov) =>
          isLoading ? (
            <Skeleton
              key={mov?.id}
              borderRadius={"lg"}
              bg="blackAlpha.300"
              height={"300px"}
            />
          ) : (
            <MediaCard key={mov?.id} med={mov} type={"movie"} />
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

export default Movies;
