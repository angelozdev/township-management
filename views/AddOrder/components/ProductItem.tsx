import { Avatar } from "@chakra-ui/avatar";
import { Checkbox } from "@chakra-ui/checkbox";
import { Box, Heading, StackItem, Text } from "@chakra-ui/layout";
import { useDispatch, useSelector } from "react-redux";
import { prettyTime } from "../utils";
import {
  addProduct,
  removeProduct,
} from "@redux/features/pre-order/preOrderSlice";

// types
import type { ChangeEvent } from "react";
import type { RootState } from "@redux/types";

interface Props {
  name: CropFromServer["name"];
  time: CropFromServer["time"];
  cost: CropFromServer["cost"];
  id: CropFromServer["id"];
  sellingPrice: CropFromServer["selling_price"];
}

function ProductItem({ name, time, cost, id, sellingPrice }: Props) {
  const dispatch = useDispatch();
  const { products } = useSelector((state: RootState) => state.preOrder);

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;
    const product: Crop = { name, time, cost, sellingPrice };
    checked
      ? dispatch(addProduct({ [id]: product }))
      : dispatch(removeProduct(id));
  };

  return (
    <StackItem rounded={8} shadow="md" as="li">
      <Checkbox
        colorScheme="teal"
        onChange={handleCheckboxChange}
        w="100%"
        p={4}
        defaultChecked={!!products[id]}
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
