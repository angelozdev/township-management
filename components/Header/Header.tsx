import { StarIcon } from "@chakra-ui/icons";
import { Box, Container } from "@chakra-ui/layout";
import { Heading } from "@chakra-ui/react";

function Header() {
  return (
    <Box borderBottom="1px" borderBottomColor="gray.100" as="header">
      <Container maxW="container.xl">
        <Box
          paddingY="1rem"
          display="flex"
          alignContent="center"
          gridGap="0.5rem"
        >
          <StarIcon />
          <Heading as="h1" size="sm">
            Township Management
          </Heading>
        </Box>
      </Container>
    </Box>
  );
}

export default Header;
