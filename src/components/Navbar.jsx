import { Box, Button, Container, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/useAuth";

const Navbar = () => {
  const { user, logout } = useAuth();

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
              {user ? (
                <Button color={'#fff'} variant="link" onClick={logout}>
                  Log out
                </Button>
              ) : (
                <Link to="/login">Log In!</Link>
              )}
            </Flex>
          </Flex>
        </Container>
      </Box>
    </div>
  );
};

export default Navbar;
