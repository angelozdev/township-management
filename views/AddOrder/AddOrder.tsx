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
import { prettyTime } from "./utils";
import { Layout } from "./components";

// types
interface Props {
  crops: any[];
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
                <Tab>Materias primas</Tab>
                <Tab>Productos procesados</Tab>
              </TabList>
              <TabPanels>
                <TabPanel p={0} my={5}>
                  <Stack as="ul" spacing={2}>
                    {crops.map(({ name, cost, time, id }) => {
                      return (
                        <StackItem key={id} rounded={8} shadow="md" as="li">
                          <Checkbox colorScheme="teal" w="100%" p={4}>
                            <Box display="flex" gridGap="4" alignItems="center">
                              <Box ml={4}>
                                <Avatar name={name} size="md" />
                              </Box>

                              <Box flexBasis="100px" flexGrow={1}>
                                <Heading
                                  as="h3"
                                  size="sm"
                                  textTransform="capitalize"
                                >
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
                                  <Text as="span">{cost}</Text>
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
