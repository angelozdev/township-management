import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { Layout, CropList } from "./components";

// types
interface Props {
  crops: Crop[];
  feeds: Feed[];
}

function AddOrder({ crops, feeds }: Props) {
  return (
    <Layout>
      <Box as="section">
        <Container maxW="container.sm">
          <Box>
            <Tabs
              size="sm"
              colorScheme="teal"
              isLazy
              isFitted
              variant="solid-rounded"
            >
              <TabList>
                <Tab>Crops</Tab>
                <Tab>Feeds</Tab>
              </TabList>
              <TabPanels>
                <TabPanel p={0} my={5}>
                  <CropList crops={crops} />
                </TabPanel>
                <TabPanel p={0} my={5}>
                  <ul>
                    {feeds.map(({ id, name, materials }) => (
                      <li key={id}>
                        {name}
                        <ul>
                          {materials.map(({ id, name, quantity }) => (
                            <li key={id}>
                              {name} - {quantity}
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
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
