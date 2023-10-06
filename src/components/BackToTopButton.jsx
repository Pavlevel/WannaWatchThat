import { ChevronUpIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import React from "react";

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    right: 0,
    behavior: "smooth",
  });
};

const BackToTopButton = () => {
  return (
    <>
      <IconButton
        size={"lg"}
        bg={"#008E89"}
        icon={<ChevronUpIcon />}
        position={"fixed"}
        bottom={"4"}
        right={"2"}
        border={"1px solid #fff"}
        zIndex={"1"}
        _hover={{ backgroundColor: "#084594" }}
        onClick={scrollToTop}
      />
    </>
  );
};

export default BackToTopButton;
