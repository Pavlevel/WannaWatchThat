import React, { useState } from "react";
import { Box, Input, Flex, IconButton } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  return (
    <Box py={"4"}>
      <form>
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
            type="submit"
            bg={"#008E89"}
            borderRight={"1px solid #FFF"}
            borderY={"1px solid #FFF"}
            borderLeftRadius={"none"}
            _hover={{ backgroundColor: "#084594" }}
            icon={<SearchIcon />}
          />
        </Flex>
      </form>
    </Box>
  );
};

export default SearchBar;
