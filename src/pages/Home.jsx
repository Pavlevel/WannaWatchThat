import { Box, Text, Heading, Grid, Skeleton } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { getTrending } from "../services/api";
import MediaCard from "../components/MediaCard";
import SearchBar from "../components/SearchBar";
import ChangePage from "../components/ChangePage";

const Home = () => {
  const [media, setMedia] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    getTrending(currentPage)
      .then((res) => {
        setMedia(res?.results);
        setCurrentPage(res?.page);
        setTotalPages(res?.total_pages);
      })
      .catch((err) => {
        console.log(err, "error from Home useEffect");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [currentPage]);

  return (
    <Box py={"4"}>
      <Heading py={"4"} textAlign={"center"}>
        Welcome to Wanna Watch That!
      </Heading>
      <Text textAlign={"center"}>
        The worlds most popular movie and tv shows Database!
      </Text>
      <SearchBar />
      <Grid templateColumns="repeat(4, 1fr)" justifyItems={"center"} gap={"4"}>
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
      </Grid>
      <ChangePage
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </Box>
  );
};

export default Home;
