import { Box, Text, Heading, Grid, Skeleton } from "@chakra-ui/react";
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
      .catch((err) => {
        console.log(err, "error from Movies useEffect");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [currentPage]);

  return (
    <Box py={"4"}>
      <Heading py={"4"} textAlign={"center"}>
        Movies
      </Heading>
      <SearchBar />

      <Grid templateColumns="repeat(4, 1fr)" justifyItems={"center"} gap={"4"}>
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
      </Grid>
      <ChangePage
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </Box>
  );
};

export default Movies;
