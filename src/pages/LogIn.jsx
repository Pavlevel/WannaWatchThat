import React, { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Box,
  Heading,
  Input,
  Flex,
  Button,
  Text,
  InputGroup,
  InputRightElement,
  IconButton,
  useToast,
  Container,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";

const LogIn = () => {
  // Context
  const { loginFunction, signinGoogle } = useAuth();

  // Utilities
  const toast = useToast();
  const navigate = useNavigate();

  // Show Password
  const [showPassword, setShowPassword] = useState("false");

  // Userdetails
  const [usEmail, setUsEmail] = useState("");
  const [usPassword, setUsPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await loginFunction(usEmail, usPassword);
      navigate("/dashboard");
      toast({
        colorScheme: "teal",
        position: "top",
        title: "Welcome back!",
        description: "Welcome back!",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        position: "top",
        title: "Uh-oh!",
        description: error?.message,
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  const handleGoogle = async () => {
    try {
      await signinGoogle();
      navigate("/dashboard");
      toast({
        colorScheme: "teal",
        position: "top",
        title: "Welcome back!",
        description: "Welcome back!",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        position: "top",
        title: "Uh-oh!",
        description: error?.message,
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  return (
    <Box py={"4"}>
      <Container>
        <Heading textAlign={"center"} pt={"4"}>
          Log in
        </Heading>
        <Box as={"form"} onSubmit={handleLogin}>
          <Flex flexDir={"column"} gap={"4"} align={"center"} mt={"4"}>
            <Input
              autoComplete="true"
              id="userEmail"
              type="email"
              value={usEmail}
              onChange={(e) => {
                setUsEmail(e.target.value);
              }}
              bg={"#008E89"}
              placeholder="Your e-mail"
              _placeholder={{
                color: "#FFF",
                fontStyle: "italic",
              }}
            ></Input>
            <InputGroup justifyContent={"center"}>
              <Input
                id="userPassword"
                value={usPassword}
                onChange={(e) => {
                  setUsPassword(e.target.value);
                }}
                bg={"#008E89"}
                type={showPassword ? "password" : "text"}
                placeholder="Your password"
                _placeholder={{
                  color: "#FFF",
                  fontStyle: "italic",
                }}
              ></Input>
              <InputRightElement>
                <IconButton
                  bg={"unset"}
                  onClick={(e) => {
                    setShowPassword((showPassword) => !showPassword);
                  }}
                  _hover={{
                    backgroundColor: "#084594",
                    border: "1px solid #fff",
                  }}
                  borderLeftRadius={"none"}
                  icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
                />
              </InputRightElement>
            </InputGroup>
            <Flex flexDir={"column"} align={"center"} gap={"4"} w={"full"}>
              <Button
                type="submit"
                w={"full"}
                bg={"#008E89"}
                color={"white"}
                _hover={{ backgroundColor: "#084594" }}
                border={"1px solid #fff"}
              >
                Log in
              </Button>
              <Button
                w={"full"}
                type="button"
                onClick={handleGoogle}
                colorScheme="blue"
                border={"1px solid #fff"}
              >
                Log in with Google
              </Button>
            </Flex>
            <Box>
              <Flex>
                <Text> Not a member yet?</Text>
                <Link to={"/register"}>
                  <Text color={"Highlight"} ml={"1"}>
                    Register now!
                  </Text>
                </Link>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Container>
    </Box>
  );
};

export default LogIn;
