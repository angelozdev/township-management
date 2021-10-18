import {
  Box,
  Container,
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
  Stack,
  StackItem,
  Avatar,
  StatNumber,
  Stat,
  StatLabel,
  Heading,
  Text,
  Badge,
} from "@chakra-ui/react";
import { farmProducts } from "farm_products_and_feeds";
import { Layout } from "./components";
import prettyMS from "pretty-ms";

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
                    {farmProducts.map(({ name, sell_price, time }) => {
                      return (
                        <StackItem
                          key={name}
                          p={4}
                          rounded={8}
                          shadow="md"
                          as="li"
                        >
                          <Box display="flex" gridGap="3" alignItems="center">
                            <Avatar name={name} size="md" />
                            <Box>
                              <Heading as="h3" size="sm">
                                {name}{" "}
                                <Badge
                                  py="1"
                                  variant="subtle"
                                  colorScheme="teal"
                                >
                                  {prettyMS(time * 1000)}
                                </Badge>
                              </Heading>
                              <Text>${sell_price}</Text>
                            </Box>
                          </Box>
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
