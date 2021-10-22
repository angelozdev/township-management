// interface Material<T = any> {
//   quantity: number;
//   ref: import("@firebase/firestore").DocumentReference<T>;
// }

// interface Crop extends Omit<CropFromServer, "id" | "selling_price"> {
//   readonly sellingPrice: CropFromServer["selling_price"];
// }

// interface Feed
//   extends Omit<FeedFromServer, "id" | "selling_price" | "materials"> {
//   readonly sellingPrice: FeedFromServer["selling_price"];
//   readonly materials: Material<Crop>[];
// }

// interface Crops {
//   [id: CropFromServer["id"]]: Crop;
// }

interface Crop {
  readonly id: string;
  readonly name: string;
  readonly sellingPrice: number;
  readonly cost: number;
  readonly time: number;
}

interface Feed {
  readonly id: string;
  readonly name: string;
  readonly sellingPrice: number;
  readonly time: number;
  readonly materials: Array<{ quantity: number } & Crop>;
}
