import React from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { useAuth } from "../context/useAuth";
import Lists from "../components/Lists";

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <Box align={"center"} py={"4"}>
      <Flex
        alignItems={"center"}
        justifyContent={"space-between"}
        py={"4"}
        mb={"4"}
      >
        <Box w={"full"}>
          <Heading as={"h2"}>Welcome to Dashboard!</Heading>
          <Text as={"p"} mt={"4"}>
            Welcome to your dashboard{" "}
            {user.displayName ? user.displayName : "Watcher"}! Here you can See
            what movies you've set in your watchlist and you can also see movies
            that you previosly watched.
          </Text>
        </Box>
      </Flex>
      <Box>
        <Lists />
      </Box>
    </Box>
  );
};

export default Dashboard;
