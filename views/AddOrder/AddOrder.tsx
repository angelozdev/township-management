import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { Layout, ProductList } from "./components";

// types
interface Props {
  crops: Crop[];
}

function AddOrder({ crops }: Props) {
  return (
    <Layout>
      <Box as="section">
        <Container maxW="container.xl">
          <Box>
            <Tabs
              size="sm"
              colorScheme="teal"
              isLazy
              isFitted
              variant="solid-rounded"
            >
              <TabList>
                <Tab>Source matrials</Tab>
                <Tab>Goods</Tab>
              </TabList>
              <TabPanels>
                <TabPanel p={0} my={5}>
                  <ProductList crops={crops} />
                </TabPanel>
                <TabPanel p={0} my={5}>
                  <ProductList crops={[...crops].reverse()} />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </Container>
      </Box>
    </Layout>
  );
}

export default AddOrder;
