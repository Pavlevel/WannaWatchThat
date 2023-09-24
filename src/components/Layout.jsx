import React from "react";
import Navbar from "./Navbar";
import { Container } from "@chakra-ui/react";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>
        <Container maxW={"container.xl"}>{children}</Container>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
