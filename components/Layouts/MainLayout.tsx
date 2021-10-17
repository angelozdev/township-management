import { Box } from "@chakra-ui/layout";
import { Header } from "@components";

// types
import { Fragment, PropsWithChildren } from "react";

function MainLayout({ children }: PropsWithChildren<{}>) {
  return (
    <Fragment>
      <Header />
      <Box as="main">{children}</Box>
    </Fragment>
  );
}

export default MainLayout;
