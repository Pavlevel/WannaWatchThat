import {
  Box,
  Button,
  Flex,
  Heading,
  MenuDescendantsProvider,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import Lists from "../components/Lists";

const Dashboard = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState("");

  useEffect(() => {
    const listen = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        console.log(user, "sum user");
      } else {
        navigate("/login");
      }
    });

    return () => {
      listen();
    };
  }, []);

  const logout = () => {
    auth.signOut();
  };

  return (
    <Box align={"center"}>
      <Flex alignItems={"center"} justifyContent={"space-between"} py={"4"}>
        <Box w={"full"}>
          <Heading as={"h2"}>Welcome to Dashboard!</Heading>
          <Text>Finally, you have made it here weary {user.email}.</Text>

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
