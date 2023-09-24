import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { Flex, IconButton, Text } from "@chakra-ui/react";
import React from "react";

const ChangePage = ({ currentPage, setCurrentPage, totalPages }) => {
  return (
    <Flex gap={"4"} justifyContent={"center"} alignItems={"baseline"}>
      <IconButton
        icon={<ArrowLeftIcon />}
        bg={"#008E89"}
        isDisabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
      />
      <Text>
        {currentPage} pages of {totalPages}
      </Text>
      <IconButton
        icon={<ArrowRightIcon />}
        bg={"#008E89"}
        isDisabled={currentPage === totalPages}
        onClick={() => setCurrentPage(currentPage + 1)}
      />
    </Flex>
  );
};

export default ChangePage;
