import React from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { useAuth } from "../context/useAuth";
import Lists from "../components/Lists";

const Dashboard = () => {
  const { user } = useAuth();

  console.log(user);

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
          <Text as={"p"}>
            Finally, you have made it here weary {user && user.displayName} &
            {user && user.email}.
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
