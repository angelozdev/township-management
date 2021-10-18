import {
  Avatar,
  Box,
  Checkbox,
  Container,
  Heading,
  Stack,
  StackItem,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { farmProducts } from "farm_products_and_feeds";
import { prettyTime } from "./utils";
import { Layout } from "./components";

function AddOrder() {
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
                <Tab>Materias primas</Tab>
                <Tab>Productos procesados</Tab>
              </TabList>
              <TabPanels>
                <TabPanel p={0} my={5}>
                  <Stack as="ul" spacing={2}>
                    {farmProducts.map(({ name, sell_price, time }, index) => {
                      return (
                        <StackItem key={name} rounded={8} shadow="md" as="li">
                          <Checkbox colorScheme="teal" w="100%" p={4}>
                            <Box display="flex" gridGap="4" alignItems="center">
                              <Box ml={4}>
                                <Avatar name={name} size="md" />
                              </Box>

                              <Box flexBasis="100px" flexGrow={1}>
                                <Heading as="h3" size="sm">
                                  {name}{" "}
                                </Heading>
                                <Text
                                  fontSize="xs"
                                  textTransform="uppercase"
                                  color="gray.500"
                                >
                                  {prettyTime(time)}
                                </Text>
                                <Text fontSize="xl">
                                  <Text as="small" color="gray.600">
                                    $
                                  </Text>
                                  <Text as="span">{sell_price}</Text>
                                </Text>
                              </Box>
                            </Box>
                          </Checkbox>
                        </StackItem>
                      );
                    })}
                  </Stack>
                </TabPanel>
                <TabPanel>asdasddaasdasdadsdasdasd</TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </Container>
      </Box>
    </Layout>
  );
}

export default AddOrder;
