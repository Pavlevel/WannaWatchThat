import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Text,
} from "@chakra-ui/react";
import { VscAccount } from "@react-icons/all-files/vsc/VscAccount.esm";

const Home = () => {
  const handleLogin = () => {};

  return (
    <div>
      <Flex
        flexDir={"row"}
        height={"16"}
        alignItems={"center"}
        justify={"center"}
        bg={"#008E89"}
        width={"full"}
      >
        <Heading bg={"#008E89"}>WWT</Heading>

        <Button
          _hover={{ bg: "#FFD32D", color: "white" }}
          bg={"#008E89"}
          onClick={handleLogin}
          w={10}
          h={"fit-content"}
        >
          <Icon
            _hover={{ bg: "#FFD32D", color: "black", borderRadius: 6 }}
            as={VscAccount}
            bg={"#008E89"}
            w={10}
            h={10}
            color="red.500"
          />
        </Button>
        <Button bg={"#008E89"} onClick={handleLogin} w={8} h={"fit-content"}>
          <Icon as={VscAccount} bg={"#008E89"} w={8} h={8} color="red.500" />
        </Button>
      </Flex>

      <Container maxW={"container.md"} centerContent>
        <Flex flexDir={"column"} gap={"4"}>
          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid,
            ad. Autem sit provident debitis molestiae quas voluptatem esse
            deleniti. Eos nostrum similique suscipit harum temporibus mollitia
            inventore cupiditate! Consectetur, debitis.
          </Text>

          <Button
            bg={"#008E89"}
            color={"#fff"}
            _hover={{ bg: "#FFD32D", color: "#000" }}
          >
            Click
          </Button>
        </Flex>
      </Container>
    </div>
  );
};

export default Home;
