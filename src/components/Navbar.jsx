import {
  Box,
  Container,
  Flex,
  Heading,
  Avatar,
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  Show,
  IconButton,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/useAuth";
import { HamburgerIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <div>
      <Box bg={"#008E89"} py={"2"}>
        <Container className="navbar" maxW={"container.xl"}>
          <Flex justifyContent={"space-between"} alignItems={"center"}>
            <Link to="/home">
              <Heading mr={"4"} as={"h1"}>
                WWT?
              </Heading>
            </Link>
            <Show below="sm">
              <Menu>
                {user ? (
                  <MenuButton>
                    <Avatar size="sm" name={user.displayName} />
                  </MenuButton>
                ) : (
                  <MenuButton
                    as={IconButton}
                    aria-label="Options"
                    icon={<HamburgerIcon />}
                    variant="outline"
                    _hover={{ backgroundColor: "#084594" }}
                  />
                )}

                <MenuList bg={"#008E89"}>
                  <Link to="/home">
                    <MenuItem
                      bg={"#008E89"}
                      _hover={{ backgroundColor: "#084594" }}
                    >
                      {" "}
                      Home
                    </MenuItem>
                  </Link>
                  <Link to="/movies">
                    <MenuItem
                      bg={"#008E89"}
                      _hover={{ backgroundColor: "#084594" }}
                    >
                      Trending Movies
                    </MenuItem>
                  </Link>
                  <Link to="/shows">
                    <MenuItem
                      bg={"#008E89"}
                      _hover={{ backgroundColor: "#084594" }}
                    >
                      Trending Shows
                    </MenuItem>
                  </Link>
                  <Link to="/search">
                    <MenuItem
                      bg={"#008E89"}
                      _hover={{ backgroundColor: "#084594" }}
                    >
                      Search!
                    </MenuItem>
                  </Link>
                  {user ? (
                    <>
                      {" "}
                      <Link to="/dashboard">
                        <Flex>
                          <MenuItem
                            bg={"#008E89"}
                            _hover={{ backgroundColor: "#084594" }}
                          >
                            Dashboard
                          </MenuItem>{" "}
                        </Flex>
                      </Link>{" "}
                      <Link onClick={logout}>
                        <MenuItem
                          bg={"#008E89"}
                          _hover={{ backgroundColor: "#084594" }}
                        >
                          Log out
                        </MenuItem>
                      </Link>
                    </>
                  ) : (
                    <Link to="/login">
                      {" "}
                      <MenuItem
                        bg={"#008E89"}
                        _hover={{ backgroundColor: "#084594" }}
                      >
                        {" "}
                        Log In!{" "}
                      </MenuItem>{" "}
                    </Link>
                  )}
                </MenuList>
              </Menu>{" "}
            </Show>
            <Show above="sm">
              <Flex align={"center"} gap={"3"}>
                <Link to="/home">Home</Link>
                <Menu>
                  <MenuButton>Start watching!</MenuButton>
                  <MenuList bg={"#008E89"}>
                    <Link to="/movies">
                      <MenuItem
                        bg={"#008E89"}
                        _hover={{ backgroundColor: "#084594" }}
                      >
                        Trending Movies
                      </MenuItem>
                    </Link>
                    <Link to="/shows">
                      <MenuItem
                        bg={"#008E89"}
                        _hover={{ backgroundColor: "#084594" }}
                      >
                        Trending Shows
                      </MenuItem>
                    </Link>
                    <Link to="/search">
                      <MenuItem
                        bg={"#008E89"}
                        _hover={{ backgroundColor: "#084594" }}
                      >
                        Search
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
            </Show>
          </Flex>
        </Container>
      </Box>
    </div>
  );
};

export default Navbar;
