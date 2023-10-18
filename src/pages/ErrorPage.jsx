import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import React from "react";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <Box textAlign={"center"} py={"4"}>
      <Flex
        flexDir={"column"}
        gap={"8"}
        align={"center"}
        justify={"center"}
        h={"100vh"}
      >
        <Heading as={"h3"}>Uh oh, ooks like you got lost!</Heading>

        <Text>The page you were looking for doesn't exist.</Text>
        <Button
          onClick={(e) => {
            navigate("/home");
          }}
          bg={"#008E89"}
          w={"25%"}
        >
          <Text color={"white"}>Click here to go back home</Text>
        </Button>
      </Flex>
    </Box>
  );
};

export default ErrorPage;
