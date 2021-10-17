import { Box, Container } from "@chakra-ui/layout";

function Header() {
  return (
    <Box bgColor="green.100" as="header">
      <Container maxW="container.lg">Hola</Container>
    </Box>
  );
}

export default Header;
