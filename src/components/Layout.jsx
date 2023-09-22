import React from "react";
import Navbar from "./Navbar";
import { Container } from "@chakra-ui/react";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>
        <Container maxW={"container.xl"}>{children}</Container>
      </main>
      <footer></footer>
    </>
  );
};

export default Layout;
