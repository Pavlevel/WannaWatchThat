import React, { useEffect, useState } from "react";
import { useAuth } from "../context/useAuth";
import {
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
  Box,
  useToast,
} from "@chakra-ui/react";
import UserFavoriteCard from "./UserFavoriteCard";
import UserWatchedCard from "./UserWatchedCard";
import { db } from "../firebase";
import {
  getDoc,
  collection,
  doc,
  query,
  setDoc,
  getDocs,
  deleteDoc,
} from "firebase/firestore";

const Lists = () => {
  const toast = useToast();
  // const [isLoading, setIsLoading] = useState(false);
  const { user, uid } = useAuth();

  // usestate za listu stvari za gledanje
  const [watchlist, setWatchList] = useState([]);

  // usestate za odgledane stvari
  const [watched, setWatched] = useState([]);

  // putanja za stvari za gledanje

  const userFavoritesCollection = collection(db, "favorites");
  const userfDocRef = doc(userFavoritesCollection, uid);
  const favoritesCol = collection(userfDocRef, "UserFavorites");

  // globalna putanja za odgledane stvari

  const doneWatching = collection(db, "doneWatching");
  const userDocRef = doc(doneWatching, uid);
  const userWatched = collection(userDocRef, "UserWatched");

  const removeFromWatchList = async (MediaID) => {
    try {
      if (!user) {
        console.log("No user found!");
      }

      const mediaDocRef = doc(favoritesCol, MediaID);
      await deleteDoc(mediaDocRef);
      toast({
        title: "Success",
        description: "Movie removed from watch list.",
        status: "success",
        duration: 4500,
        position: "top",
        isClosable: true,
      });

      const filterWatchlist = watchlist?.filter(
        (wat) => wat?.id?.toString() !== MediaID?.toString()
      );
      setWatchList(filterWatchlist);
    } catch (error) {
      console.log(error, "error removing movie from watchlist");
    }
  };

  // funkcija za prebacivanje stvari u odgledano
  const addWatchedMedia = async (watchitem) => {
    try {
      if (!user) {
        toast({
          position: "error",
          title: "Uh-oh!",
          description: `An error occured, please try logging in`,
          status: "error",
          duration: 4500,
          isClosable: true,
        });
      }

      const mediaDoc = doc(userWatched, watchitem?.id?.toString());

      const docSnap = await getDoc(mediaDoc);
      if (docSnap.exists()) {
        toast({
          position: "error",
          title: "Uh-oh!",
          description: `Already in your favorites`,
          status: "error",
          duration: 4500,
          isClosable: true,
        });
      } else {
        await setDoc(mediaDoc, watchitem);

        removeFromWatchList(watchitem?.id?.toString());
        // const filteredWatchedlist = watched?.filter(
        //   (wat) => wat?.id?.toString() !== watchitem?.id?.toString()
        // );

        // setWatched(filteredWatchedlist);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (!user) {
    }

    const watchedQuery = query(userWatched);

    getDocs(watchedQuery)
      .then((querySnapshot) => {
        const media = [];
        querySnapshot?.forEach((med) => {
          media.push(med?.data());
        });
        setWatched(media);
      })
      .catch((err) => {
        console.log(err, "Error from firebase za odgledane");
      });
  }, [user, uid]);

  useEffect(() => {
    if (!user) {
    }
    // putanja za listu za stvari za gledanje

    const favouritesQuery = query(favoritesCol);

    getDocs(favouritesQuery)
      .then((querySnapshot) => {
        const media = [];
        querySnapshot?.forEach((med) => {
          media.push(med?.data());
        });
        setWatchList(media);
      })
      .catch((err) => {
        console.log(err, "Error from firebase za odgledane");
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
                return (
                  <UserFavoriteCard
                    key={watch?.id}
                    watchitem={watch}
                    addWatchedMedia={addWatchedMedia}
                    removeFromWatchList={removeFromWatchList}
                    watchlist={watchlist}
                  />
                );
              })}
            </Box>
          </TabPanel>
          <TabPanel>
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
              {watched?.map((wat) => (
                <UserWatchedCard key={wat?.id} watcheditem={wat} />
              ))}
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default Lists;
