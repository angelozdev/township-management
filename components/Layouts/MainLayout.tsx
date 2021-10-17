import { Fragment } from "react";
import { Portal, Button, Box } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { Header } from "@components";

// types
import type { PropsWithChildren } from "react";

function MainLayout({ children }: PropsWithChildren<{}>) {
  return (
    <Fragment>
      <Header />
      <Box as="main">{children}</Box>
      <Portal>
        <Button
          colorScheme="purple"
          padding="1.25rem"
          rounded="full"
          position="fixed"
          bottom="1rem"
          right="1rem"
          w="3.5rem"
          h="3.5rem"
        >
          <AddIcon color="white" w="100%" h="100%" />
        </Button>
      </Portal>
    </Fragment>
  );
}

export default MainLayout;
