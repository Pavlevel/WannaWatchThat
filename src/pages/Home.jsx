import { Search2Icon, SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Text,
  Input,
  Heading,
  Flex,
  IconButton,
  Grid,
} from "@chakra-ui/react";
import React from "react";

const Home = () => {
  // const handleLogin = () => {};

  return (
    <Box py={"4"}>
      <Heading py={"4"} textAlign={"center"}>
        Welcome to Wanna Watch That!
      </Heading>
      <Text textAlign={"center"}>
        The worlds most popular movie and tv shows Database!
      </Text>
      <form>
        <Box>
          <Flex>
            <Input
              bg={"#008E89"}
              placeholder="Search a movie or show!"
              _placeholder={{
                color: "#FFF",
                textAlign: "center",
                fontStyle: "italic",
              }}
              borderRightRadius={"none"}
            ></Input>
            <IconButton
              bg={"#008E89"}
              borderRight={"1px solid #FFF"}
              borderY={"1px solid #FFF"}
              borderLeftRadius={"none"}
              _hover={{ backgroundColor: "#FFD32D" }}
              icon={<SearchIcon />}
            />
          </Flex>
        </Box>
      </form>
      <Grid templateColumns="repeat(4, 1fr)" justifyItems={"center"} gap={"4"}>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
      </Grid>
    </Box>
  );
};

export default Home;
