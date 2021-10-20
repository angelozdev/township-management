import {
  collection,
  getDocs,
  orderBy,
  query,
  where,
} from "@firebase/firestore";
import { db } from "@firebaseClient";

async function getCrops() {
  const cropsRef = collection(db, "crops");
  const q = query(cropsRef, orderBy("cost"));
  const querySnapshot = await getDocs(q);
  const crops = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return crops;
}

export default getCrops;
