import { Box, Container, Text } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Box bg={"#008E89"} py={"2"}>
      <Container maxW={"container.xl"}>
        <Text>Copyright © 2023 Pavlevel Inc. Allrights reserved </Text>
      </Container>
    </Box>
  );
};

export default Footer;
