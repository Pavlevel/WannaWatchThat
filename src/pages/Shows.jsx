import { Box, Heading, Skeleton, SimpleGrid, Spinner } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { getShows } from "../services/api";
import MediaCard from "../components/MediaCard";
import ChangePage from "../components/ChangePage";

const Shows = () => {
  const [shows, setShows] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    getShows(currentPage)
      .then((res) => {
        setShows(res?.results);
        setCurrentPage(res?.page);
        setTotalPages(res?.total_pages);
        // console.log(res?.results);
      })
      .catch((err) => {})
      .finally(() => {
        setIsLoading(false);
      });
  }, [currentPage]);

  return (
    <Box py={"4"}>
      <Heading py={"4"} textAlign={"center"}>
        Trending TV Shows
      </Heading>

      <SimpleGrid minChildWidth={"250px"} justifyItems={"center"} gap={"4"}>
        {shows?.map((show) =>
          isLoading ? (
            <Spinner size="lg" />
          ) : (
            <MediaCard key={show?.id} med={show} type={"tv"} />
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

export default Shows;
