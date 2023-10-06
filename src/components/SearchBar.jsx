import React, { useState } from "react";
import { Box, Input, Flex, IconButton, FormControl } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { getAllMedia } from "../services/api";

const SearchBar = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    const search = {
      searchQuery: query,
    };
    e.preventDefault();

    console.log(search, query, "search is here");
  };

  console.log(query, "jebote kuj te napravio");
  return (
    <Box py={"4"}>
      <FormControl onSubmit={handleSearch}>
        <Box>
          <Flex>
            <Input
              onChange={(e) => setQuery(e.target.value)}
              value={query}
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
              borderRightRadius={"none"}
              px={"4px"}
            ></Input>
            <IconButton
              onClick={() => {
                getAllMedia();
                navigate("/searchresults");
              }}
              bg={"#008E89"}
              borderRight={"1px solid #FFF"}
              borderY={"1px solid #FFF"}
              borderLeftRadius={"none"}
              _hover={{ backgroundColor: "#084594" }}
              icon={<SearchIcon />}
            />
          </Flex>
        </Box>
      </FormControl>
    </Box>
  );
};

export default SearchBar;
