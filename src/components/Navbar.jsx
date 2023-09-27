import { Box, Container, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const user = true;
  return (
    <div>
      <Box bg={"#008E89"} py={"2"}>
        <Container className="navbar" maxW={"container.xl"}>
          <Flex justifyContent={"space-between"} alignItems={"center"}>
            <Link to="/">
              <Heading as={"h2"}>WWT?</Heading>
            </Link>

            <Flex as={"nav"} gap={"4"}>
              <Link to="/">Home</Link>
              <Link to="/movies">Movies</Link>
              <Link to="/shows">Shows</Link>
              <Link to="/login">Log In!</Link>
            </Flex>
          </Flex>
        </Container>
      </Box>
    </div>
  );
};

export default Navbar;
