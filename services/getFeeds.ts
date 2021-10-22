import {
  collection,
  collectionGroup,
  CollectionReference,
  getDocs,
  orderBy,
  query,
} from "@firebase/firestore";
import { db } from "@firebaseClient";

async function getFeeds() {
  const feedsRef = collectionGroup(db, "feeds.materials");

  console.log("feedRef", feedsRef);
  const q = query(feedsRef);
  const querySnapshot = await getDocs(q);
  const feeds = querySnapshot.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });

  return feeds;
}

export default getFeeds;
