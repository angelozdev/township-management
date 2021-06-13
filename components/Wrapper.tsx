import { PropsWithChildren } from "react";

interface Props {
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
}

function Wrapper({ children, size }: PropsWithChildren<Props>) {
  const maxWidth = size ? `max-w-${size}` : "";
  return <div className={`container mx-auto px-2 ${maxWidth}`}>{children}</div>;
}

export default Wrapper;
