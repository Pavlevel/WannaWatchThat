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
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [showPassword, setShowPassword] = useState("false");
  const [showConfirmedPassword, setShowConfirmedPassword] = useState("false");
  return (
    <Box py={"4"}>
      <Heading textAlign={"center"} py={"4"}>
        Register
      </Heading>
      <Flex flexDir={"column"} gap={"4"} align={"center"} mt={"4"}>
        <Input
          autoComplete="true"
          bg={"#008E89"}
          maxW={"50%"}
          name="username"
          placeholder="Username"
          _placeholder={{
            color: "#FFF",
            fontStyle: "italic",
          }}
        ></Input>
        <InputGroup w={"50%"} justifyContent={"center"}>
          <Input
            bg={"#008E89"}
            name="password"
            type={showPassword ? "password" : "text"}
            placeholder="Your password"
            _placeholder={{
              color: "#FFF",
              fontStyle: "italic",
            }}
          ></Input>
          <InputRightElement>
            <IconButton
              onClick={(e) => {
                setShowPassword((showPassword) => !showPassword);
              }}
              bg={"unset"}
              _hover={{ backgroundColor: "#084594", border: "1px solid #fff" }}
              borderLeftRadius={"none"}
              icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
            />
          </InputRightElement>
        </InputGroup>

        <InputGroup w={"50%"} justifyContent={"center"}>
          <Input
            bg={"#008E89"}
            name="password"
            type={showConfirmedPassword ? "password" : "text"}
            placeholder="Confirm your password"
            _placeholder={{
              color: "#FFF",
              fontStyle: "italic",
            }}
          ></Input>
          <InputRightElement>
            <IconButton
              bg={"unset"}
              _hover={{ backgroundColor: "#084594", border: "1px solid #fff" }}
              borderLeftRadius={"none"}
              onClick={(e) => {
                setShowConfirmedPassword(
                  (showConfirmedPassword) => !showConfirmedPassword
                );
              }}
              icon={showConfirmedPassword ? <ViewOffIcon /> : <ViewIcon />}
            />
          </InputRightElement>
        </InputGroup>

        <Flex w={"100%"} align={"center"} gap={"4"} flexDir={"column"}>
          <Button
            w={"50%"}
            bg={"#008E89"}
            color={"white"}
            border={"1px solid #fff"}
            _hover={{
              backgroundColor: "#084594",
            }}
          >
            Register
          </Button>
          <Button w={"50%"} colorScheme="blue">
            Register with Google
          </Button>
        </Flex>
        <Text>
          Already a member?
          <span className="blue">
            <Link to={"/login"}> Login now!</Link>
          </span>
        </Text>
      </Flex>
    </Box>
  );
};

export default Register;
