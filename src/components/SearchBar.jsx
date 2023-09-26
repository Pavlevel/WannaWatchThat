import React, { useState } from "react";
import { Box, Input, Flex, IconButton } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");

  return (
    <Box py={"4"}>
      <form>
        <Box>
          <Flex>
            <Input
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
              value={searchInput}
              onClick={(e) => {
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
      </form>
    </Box>
  );
};

export default SearchBar;
