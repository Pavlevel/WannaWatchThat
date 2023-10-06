import React from "react";
import {
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
  Text,
  Heading,
  Flex,
  Stack,
  Box,
} from "@chakra-ui/react";
import DasbhoardCard from "./DasbhoardCard";

const Lists = () => {
  return (
    <>
      <Tabs
        border={"1px solid #fff"}
        borderRadius={"md"}
        variant="solid-rounded"
        size={"lg"}
        bg={"#008E89"}
      >
        <TabList>
          <Tab
            borderTopLeftRadius={"md"}
            borderRightRadius={"none"}
            borderRight={"1px solid #fff"}
            bg={"#008E89"}
          >
            Watchlist
          </Tab>
          <Tab
            borderRadius={"none"}
            borderRight={"1px solid #fff"}
            bg={"#008E89"}
          >
            Finished watching
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel bg={"#008E89"}>
            <Heading py={"4"}>Watchlist:</Heading>
            <Box
              display={"block"}
              flexDir={"column"}
              align={"center"}
              style={{ overflowY: "scroll", height: "100vh" }}
            >
              {/* MAP FUNKCIJA ZA KARTICE */}
              <DasbhoardCard />
              <DasbhoardCard />
              <DasbhoardCard />
              <DasbhoardCard />
              <DasbhoardCard />
              <DasbhoardCard />
              <DasbhoardCard />
              <DasbhoardCard />
            </Box>
          </TabPanel>
          <TabPanel>
            <Heading py={"4"}>Finished watching:</Heading>

            <Box
              display={"block"}
              flexDir={"column"}
              align={"center"}
              style={{ overflowY: "scroll", height: "100vh" }}
            >
              {/* MAP FUNKCIJA ZA KARTICE */}
              <DasbhoardCard />
              <DasbhoardCard />
              <DasbhoardCard />
              <DasbhoardCard />
              <DasbhoardCard />
              <DasbhoardCard />
              <DasbhoardCard />
              <DasbhoardCard />
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default Lists;
