import { DocumentData, DocumentReference } from "@firebase/firestore";

export interface FeedFromServer {
  readonly time: number;
  readonly selling_price: number;
  readonly name: string;
  readonly materials: Material<CropFromServer>[];
}

export interface Material<T = DocumentData> {
  readonly ref: DocumentReference<T>;
  readonly quantity: number;
}

export interface CropFromServer {
  readonly time: number;
  readonly cost: number;
  readonly name: string;
  readonly selling_price: number;
}
