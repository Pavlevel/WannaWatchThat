import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import MediaCard from "../components/MediaCard";
import ChangePage from "../components/ChangePage";
import { Box, SimpleGrid, Skeleton } from "@chakra-ui/react";
import { getAllMedia } from "../services/api";

const SearchResults = () => {
  const [media, setMedia] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    getAllMedia(currentPage)
      .then((res) => {
        setMedia(res?.results);
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
      <SearchBar />

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

export default SearchResults;
