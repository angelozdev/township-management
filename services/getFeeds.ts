import {
  collection,
  CollectionReference,
  getDoc,
  getDocs,
  query,
} from "@firebase/firestore";
import { db } from "@firebaseClient";

// types
import { FeedFromServer } from "./types";

const getMaterials = async (materials: FeedFromServer["materials"]) => {
  const populatedMaterials = await Promise.all(
    materials.map(async ({ ref, quantity }) => {
      const doc = await getDoc(ref);
      const data = doc.data();
      if (typeof data !== "object") throw new Error("[getFeeds]: No data");
      const { selling_price: sellingPrice, ...rest } = data;
      return {
        ...rest,
        id: doc.id,
        quantity,
        sellingPrice,
      };
    })
  );

  return populatedMaterials;
};

async function getFeeds(): Promise<Feed[]> {
  const feedsRef = collection(
    db,
    "feeds"
  ) as CollectionReference<FeedFromServer>;

  const q = query(feedsRef);
  const querySnapshot = await getDocs(q);
  const feeds = await Promise.all(
    querySnapshot.docs.map(async (doc) => {
      const {
        selling_price: sellingPrice,
        materials: _materials,
        ...rest
      } = doc.data();

      const materials = await getMaterials(_materials);
      return {
        ...rest,
        id: doc.id,
        materials,
        sellingPrice,
      };
    })
  );

  return feeds;
}

export default getFeeds;
