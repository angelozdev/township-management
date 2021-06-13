import { createContext, useContext } from "react";
import { ValuesWithActions } from "./types";

export const PreOrderContext = createContext<ValuesWithActions>({
  title: "",
  goods: [],
  feeds: [],
  setPreOrder: () => {},
});
export const usePreOrderContext = () => useContext(PreOrderContext);

export default PreOrderContext;
