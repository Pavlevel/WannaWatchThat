import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Avatar,
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
} from "@chakra-ui/react";
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
              <Heading mr={"4"} as={"h1"}>
                WWT?
              </Heading>
            </Link>

            <Flex align={"center"} gap={"3"}>
              <Link to="/">Home</Link>
              <Menu>
                <MenuButton>Start watching!</MenuButton>
                <MenuList bg={"#008E89"}>
                  <Link to="/movies">
                    <MenuItem
                      bg={"#008E89"}
                      _hover={{ backgroundColor: "#084594" }}
                    >
                      Movies
                    </MenuItem>
                  </Link>
                  <Link to="/shows">
                    <MenuItem
                      bg={"#008E89"}
                      _hover={{ backgroundColor: "#084594" }}
                    >
                      Shows
                    </MenuItem>
                  </Link>
                </MenuList>
              </Menu>

              {user ? (
                <Menu>
                  <MenuButton>
                    <Avatar size="sm" name={user.displayName} />
                  </MenuButton>
                  <MenuList bg={"#008E89"}>
                    <Link to="/dashboard">
                      <MenuItem
                        bg={"#008E89"}
                        _hover={{ backgroundColor: "#084594" }}
                      >
                        Dashboard
                      </MenuItem>
                    </Link>
                    <Link onClick={logout}>
                      <MenuItem
                        bg={"#008E89"}
                        _hover={{ backgroundColor: "#084594" }}
                      >
                        Log out
                      </MenuItem>
                    </Link>
                  </MenuList>
                </Menu>
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
