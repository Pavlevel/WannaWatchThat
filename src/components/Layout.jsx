import React from "react";
import Navbar from "./Navbar";
import { Container } from "@chakra-ui/react";
import Footer from "./Footer";

import BackToTopButton from "./BackToTopButton";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>
        <Container maxW={"container.xl"}>{children}</Container>

        <BackToTopButton />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
