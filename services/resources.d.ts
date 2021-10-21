interface CropFromServer {
  readonly time: number;
  readonly cost: number;
  readonly selling_price: number;
  readonly id: string;
  readonly name: string;
}

interface Crop extends Omit<CropFromServer, "id" | "selling_price"> {
  readonly sellingPrice: CropFromServer["selling_price"];
}

interface Crops {
  [id: CropFromServer["id"]]: Crop;
}
