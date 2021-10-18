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

function AddOrder() {
  const rtf = new Intl.RelativeTimeFormat("en", {
    style: "long",
    localeMatcher: "best fit",
  });

  const prettyTime = (time: number) => {
    let format: Intl.RelativeTimeFormatUnit = "seconds";
    let bestTime = time;

    if (time >= 60 && time < 60 * 60) {
      format = "minutes";
      bestTime = time / 60;
    } else if (time >= 60 * 60 && time < 60 * 60 * 24) {
      format = "hours";
      bestTime = time / (60 * 60);
    } else if (time >= 60 * 60 * 24 && time < 60 * 60 * 24 * 7) {
      format = "days";
      bestTime = time / (60 * 60 * 24);
    } else if (time >= 60 * 60 * 24 * 7 && time < 60 * 60 * 24 * 30) {
      format = "weeks";
      bestTime = time / (60 * 60 * 24 * 7);
    } else if (time >= 60 * 60 * 24 * 30) {
      format = "months";
      bestTime = time / (60 * 60 * 24 * 30);
    }

    return rtf.format(bestTime, format).replace(/in/i, "");
  };

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
                                  {prettyTime(time)}
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
