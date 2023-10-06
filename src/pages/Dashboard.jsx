import React from "react";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { useAuth } from "../context/useAuth";
import Lists from "../components/Lists";

const Dashboard = () => {
  const { user, logout } = useAuth();

  console.log(user);

  return (
    <Box align={"center"}>
      <Flex alignItems={"center"} justifyContent={"space-between"} py={"4"}>
        <Box w={"full"}>
          <Heading as={"h2"}>Welcome to Dashboard!</Heading>
          <Text as={"p"}>
            Finally, you have made it here weary {user && user.displayName} &
            {user && user.email}.
          </Text>

          <Heading as={"h3"}>Your stats: </Heading>
          <Text size={"md"}>Total items on watchlist</Text>
        </Box>
      </Flex>
      <Box>
        <Lists />
      </Box>

      <Button
        alignItems={"center"}
        onClick={logout}
        border={"1px solid #fff"}
        color={"#fff"}
        bg={"#008E89"}
        _hover={{ backgroundColor: "#084594", color: "#fff" }}
        my={"1rem"}
        w={"100%"}
      >
        Logout
      </Button>
    </Box>
  );
};

export default Dashboard;
