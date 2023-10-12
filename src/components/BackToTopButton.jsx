import { ChevronUpIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    right: 0,
    behavior: "smooth",
  });
};

const BackToTopButton = () => {

  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
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
      )}
    </>
  );
};

export default BackToTopButton;
