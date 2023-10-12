import {
  Box,
  Text,
  Heading,
  Grid,
  Skeleton,
  SimpleGrid,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { getTrending } from "../services/api";
import MediaCard from "../components/MediaCard";
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
      .catch((err) => {})
      .finally(() => {
        setIsLoading(false);
      });
  }, [currentPage]);

  return (
    <Box py={"4"}>
      <Heading as={"h1"} py={"4"} textAlign={"center"}>
        Welcome to Wanna Watch That!
      </Heading>
      <Text textAlign={"center"} mb={"4"}>
        The worlds most popular movie and tv shows Database!
      </Text>

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

export default Home;
