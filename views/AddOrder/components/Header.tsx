import { useRouter } from "next/router";

// ui
import { Button } from "@chakra-ui/button";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Box, Container } from "@chakra-ui/layout";

function Header() {
  const router = useRouter();
  return (
    <Box as="header">
      <Container maxW="container.xl">
        <Box display="flex" alignItems="center" height="3.5rem">
          <Button padding="0" background="transparent" onClick={router.back}>
            <ArrowBackIcon />
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default Header;
