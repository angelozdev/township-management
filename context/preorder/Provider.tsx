import { PropsWithChildren, useMemo, useState } from "react";
import { Context } from "./";
import { Values, ValuesWithActions } from "./types";

function Provider({ children }: PropsWithChildren<{}>) {
  const [preOrder, setPreOrder] = useState<Values>({
    title: "",
    goods: [],
    feeds: [],
  });

  const value: ValuesWithActions = useMemo(
    () => ({
      ...preOrder,
      setPreOrder,
    }),
    [preOrder]
  );

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export default Provider;
