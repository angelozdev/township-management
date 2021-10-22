import {
  collection,
  CollectionReference,
  getDocs,
  orderBy,
  query,
} from "@firebase/firestore";
import { db } from "@firebaseClient";

// types
import { CropFromServer } from "./types";

async function getCrops(): Promise<Crop[]> {
  const cropsRef = collection(
    db,
    "crops"
  ) as CollectionReference<CropFromServer>;
  const q = query(cropsRef, orderBy("cost"));
  const querySnapshot = await getDocs(q);
  const crops = querySnapshot.docs.map((doc) => {
    const { selling_price: sellingPrice, ...rest } = doc.data();
    return {
      ...rest,
      id: doc.id,
      sellingPrice,
    };
  });

  return crops;
}

export default getCrops;
