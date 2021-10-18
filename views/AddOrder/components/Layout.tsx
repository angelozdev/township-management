import { Fragment } from "react";
import { Box } from "@chakra-ui/layout";
import { Header } from "./";

// types
import type { PropsWithChildren } from "react";

function Layout({ children }: PropsWithChildren<{}>) {
  return (
    <Fragment>
      <Header />
      <Box as="main">{children}</Box>
    </Fragment>
  );
}

export default Layout;
