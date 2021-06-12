import { PropsWithChildren } from "react";

function Wrapper({ children }: PropsWithChildren<{}>) {
  return <div className="container mx-auto px-2">{children}</div>;
}

export default Wrapper;
