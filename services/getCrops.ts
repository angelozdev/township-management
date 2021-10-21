import {
  collection,
  CollectionReference,
  getDocs,
  orderBy,
  query,
} from "@firebase/firestore";
import { db } from "@firebaseClient";

async function getCrops(): Promise<CropFromServer[]> {
  const cropsRef = collection(
    db,
    "crops"
  ) as CollectionReference<CropFromServer>;
  const q = query(cropsRef, orderBy("cost"));
  const querySnapshot = await getDocs(q);
  const crops = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));

  return crops;
}

export default getCrops;
