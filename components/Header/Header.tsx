import NextLink from "next/link";

// ui
import { AddIcon, StarIcon } from "@chakra-ui/icons";
import { Box, Container, Link } from "@chakra-ui/layout";
import { Heading } from "@chakra-ui/react";

function Header() {
  return (
    <Box background="teal.800" as="header" position="sticky" top="0" w="100%">
      <Container maxW="container.xl">
        <Box
          height="3.5rem"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <NextLink href="/" passHref>
            <Link
              display="inline-flex"
              paddingY="0.5rem"
              alignContent="center"
              gridGap="0.5rem"
            >
              <StarIcon color="teal.900" />
              <Heading as="h1" size="sm" color="white">
                Township Management
              </Heading>
            </Link>
          </NextLink>

          <NextLink href="/add-order" passHref>
            <Link
              w="2rem"
              h="2rem"
              rounded="full"
              borderColor="white"
              borderWidth="1px"
              borderStyle="solid"
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
            >
              <AddIcon w="2" h="2" color="white" />
            </Link>
          </NextLink>
        </Box>
      </Container>
    </Box>
  );
}

export default Header;
