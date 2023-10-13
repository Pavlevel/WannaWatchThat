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
import { Link } from "react-router-dom";
import { useAuth } from "../context/useAuth";

const Register = () => {
  const { signUpNewUser } = useAuth();
  const toast = useToast();

  // Show passwords toggle
  const [showPassword, setShowPassword] = useState("false");
  const [showConfirmedPassword, setShowConfirmedPassword] = useState("false");

  // Gather user inputs
  const [usEmail, setUsEmail] = useState("");
  const [usPassword, setUsPassword] = useState("");
  const [usConfirmedPassword, setUsConfirmedPassword] = useState("");

  // Authentification

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (usPassword !== usConfirmedPassword) {
        toast({
          position: "top",
          title: "Uh-oh!",
          description: "Password and confirmed password are not matching",
          status: "error",
          duration: 4500,
          isClosable: true,
        });
      } else {
        await signUpNewUser(usEmail, usPassword);

        toast({
          position: "top",
          title: "Yay!",
          description: "Account created!",
          status: "success",
          duration: 4500,
          isClosable: true,
        });
      }
    } catch (error) {
      toast({
        position: "top",
        title: "Uh-oh!",
        description: error?.message,
        status: "error",
        duration: 4500,
        isClosable: true,
      });
    }
  };

  return (
    <Box py={"4"}>
      <Container>
        <Heading textAlign={"center"} py={"4"}>
          Register
        </Heading>

        <Box as="form" onSubmit={handleSubmit}>
          <Flex flexDir={"column"} gap={"4"} align={"center"} mt={"4"}>
            <Input
              type="email"
              autoComplete="true"
              bg={"#008E89"}
              name="username"
              placeholder="Username"
              _placeholder={{
                color: "#FFF",
                fontStyle: "italic",
              }}
              value={usEmail}
              onChange={(e) => setUsEmail(e.target.value)}
            ></Input>
            <InputGroup justifyContent={"center"}>
              <Input
                bg={"#008E89"}
                name="password"
                type={showPassword ? "password" : "text"}
                placeholder="Your password"
                _placeholder={{
                  color: "#FFF",
                  fontStyle: "italic",
                }}
                value={usPassword}
                onChange={(e) => setUsPassword(e.target.value)}
              ></Input>
              <InputRightElement>
                <IconButton
                  onClick={(e) => {
                    setShowPassword((showPassword) => !showPassword);
                  }}
                  bg={"unset"}
                  _hover={{
                    backgroundColor: "#084594",
                    border: "1px solid #fff",
                  }}
                  borderLeftRadius={"none"}
                  icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
                />
              </InputRightElement>
            </InputGroup>

            <InputGroup justifyContent={"center"}>
              <Input
                bg={"#008E89"}
                name="password"
                type={showConfirmedPassword ? "password" : "text"}
                placeholder="Confirm your password"
                _placeholder={{
                  color: "#FFF",
                  fontStyle: "italic",
                }}
                value={usConfirmedPassword}
                onChange={(e) => setUsConfirmedPassword(e.target.value)}
              ></Input>
              <InputRightElement>
                <IconButton
                  bg={"unset"}
                  _hover={{
                    backgroundColor: "#084594",
                    border: "1px solid #fff",
                  }}
                  borderLeftRadius={"none"}
                  onClick={() => {
                    setShowConfirmedPassword(
                      (showConfirmedPassword) => !showConfirmedPassword
                    );
                  }}
                  icon={showConfirmedPassword ? <ViewOffIcon /> : <ViewIcon />}
                />
              </InputRightElement>
            </InputGroup>

            <Flex w={"full"} align={"center"} gap={"4"} flexDir={"column"}>
              <Button
                w={"full"}
                type="submit"
                bg={"#008E89"}
                color={"white"}
                border={"1px solid #fff"}
                _hover={{
                  backgroundColor: "#084594",
                }}
              >
                Register
              </Button>
            </Flex>
            <Box>
              <Flex>
                <Text>Already a member?</Text>
                <Link to={"/login"}>
                  <Text color={"Highlight"} ml={"1"}>
                    Login now!
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

export default Register;
