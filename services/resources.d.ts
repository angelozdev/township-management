interface CropFromServer {
  readonly time: number;
  readonly cost: number;
  readonly selling_price: number;
  readonly id: string;
  readonly name: string;
}

interface Crop {
  time: CropFromServer["time"];
  cost: CropFromServer["cost"];
  sellingPrice: CropFromServer["selling_price"];
  name: CropFromServer["name"];
}

interface Crops {
  [id: CropFromServer["id"]]: Crop;
}
