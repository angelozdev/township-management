import {
  collection,
  CollectionReference,
  getDocs,
  orderBy,
  query,
} from "@firebase/firestore";
import { db } from "@firebaseClient";

async function getCrops(): Promise<Crop[]> {
  const cropsRef = collection(db, "crops") as CollectionReference<Crop>;
  const q = query<Crop>(cropsRef, orderBy("cost"));
  const querySnapshot = await getDocs(q);
  const crops = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));

  return crops;
}

export default getCrops;
