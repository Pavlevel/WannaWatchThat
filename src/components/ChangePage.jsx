import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { Flex, IconButton, Text } from "@chakra-ui/react";
import React from "react";
import { scrollToTop } from "./BackToTopButton";

const ChangePage = ({ currentPage, setCurrentPage, totalPages }) => {
  return (
    <Flex gap={"4"} justifyContent={"center"} alignItems={"baseline"}>
      <IconButton
        w={"25%"}
        icon={<ArrowLeftIcon />}
        bg={"#008E89"}
        isDisabled={currentPage === 1}
        onClick={() => {
          setCurrentPage(currentPage - 1);
          scrollToTop();
        }}
        border={"1px solid #fff"}
        _hover={{ backgroundColor: "#084594", border: "1px solid #fff" }}
      />
      <Text fontSize={"lg"}>
        {currentPage} pages of {totalPages}
      </Text>
      <IconButton
        w={"25%"}
        icon={<ArrowRightIcon />}
        bg={"#008E89"}
        isDisabled={currentPage === totalPages}
        onClick={() => {
          setCurrentPage(currentPage + 1);
          scrollToTop();
        }}
        border={"1px solid #fff"}
        _hover={{ backgroundColor: "#084594", border: "1px solid #fff" }}
      />
    </Flex>
  );
};

export default ChangePage;
