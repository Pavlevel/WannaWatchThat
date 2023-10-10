import React, { useEffect, useState } from "react";
import { useAuth } from "../context/useAuth";
import {
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
  Box,
  Text,
} from "@chakra-ui/react";
import DasbhoardCard from "./DasbhoardCard";
import { db } from "../firebase";
import { getDocs, collection, doc, query } from "firebase/firestore";

const Lists = () => {
  const { user, uid } = useAuth();
  const [watchlist, setWatchList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  console.log(watchlist);

  useEffect(() => {
    if (!user) {
      return;
    }

    const userFavoritesCollection = collection(db, "favorites");
    const userDocRef = doc(userFavoritesCollection, uid);
    const favoritesCol = collection(userDocRef, "UserFavorites");
    const favouritesQuery = query(favoritesCol);
    // console.log(favouritesQuery, "favorites query");

    getDocs(favouritesQuery)
      .then((querySnapshot) => {
        const media = [];
        querySnapshot?.forEach((med) => {
          media.push(med?.data());
        });
        setWatchList(media);
      })
      .catch((err) => {
        console.log(err, "Error from firebase");
      });
  }, [user, uid]);

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
            <Box
              display={"block"}
              flexDir={"column"}
              align={"center"}
              style={{
                overflowY: "scroll",
                maxHeight: "100vh",
                minHeight: "fit-content",
              }}
            >
              {watchlist?.map((watch) => {
                return <DasbhoardCard key={watch?.id} watchitem={watch} />;
              })}
            </Box>
          </TabPanel>
          <TabPanel>
            <Box
              display={"block"}
              flexDir={"column"}
              align={"center"}
              style={{ overflowY: "scroll", height: "100vh" }}
            >
              {/* MAP FUNKCIJA ZA KARTICE */}
              <DasbhoardCard />
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default Lists;
