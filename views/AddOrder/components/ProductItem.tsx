import { Avatar } from "@chakra-ui/avatar";
import { Checkbox } from "@chakra-ui/checkbox";
import { Box, Heading, StackItem, Text } from "@chakra-ui/layout";
import { useDispatch } from "react-redux";
import { prettyTime } from "../utils";
import { addProduct } from "@redux/features/pre-order/preOrderSlice";

interface Props {
  name: Crop["name"];
  time: Crop["time"];
  cost: Crop["cost"];
}

function ProductItem({ name, time, cost }: Props) {
  const dispatch = useDispatch();
  return (
    <StackItem rounded={8} shadow="md" as="li">
      <Checkbox
        colorScheme="teal"
        onChange={({ target }) =>
          target.checked &&
          dispatch(
            addProduct({
              name,
              time,
              cost,
              id: Date.now().toString(),
              selling_cost: 10000,
            })
          )
        }
        w="100%"
        p={4}
      >
        <Box display="flex" gridGap="4" alignItems="center">
          <Box ml={4}>
            <Avatar name={name} size="md" />
          </Box>

          <Box flexBasis="100px" flexGrow={1}>
            <Heading as="h3" size="sm" textTransform="capitalize">
              {name}{" "}
            </Heading>
            <Text fontSize="xs" textTransform="uppercase" color="gray.500">
              {prettyTime(time)}
            </Text>
            <Text fontSize="xl">
              <Text as="span" fontSize="xs" color="gray.600">
                $
              </Text>
              <Text as="span">{cost}</Text>
            </Text>
          </Box>
        </Box>
      </Checkbox>
    </StackItem>
  );
}

export default ProductItem;
