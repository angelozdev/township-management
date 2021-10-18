import { Layout } from "./components";
import { Box, Container } from "@chakra-ui/react";

function Home() {
  return (
    <Layout>
      <Box minH="120vh" as="section">
        <Container maxW="container.xl">
          <Box>Orders</Box>
        </Container>
      </Box>
    </Layout>
  );
}

export default Home;
