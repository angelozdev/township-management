import { Dispatch, SetStateAction } from "react";
import { Feed, Good } from "types";

export interface Values {
  title: string;
  goods: Good[];
  feeds: Feed[];
}

export interface ValuesWithActions extends Values {
  setPreOrder: Dispatch<SetStateAction<Values>>;
}
