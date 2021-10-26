import {
  Avatar,
  Box,
  Checkbox,
  Heading,
  StackItem,
  Text,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { prettyTime } from "../utils";
import { addCrop, removeCrop } from "@redux/features/preOrder/preOrderSlice";

// types
import type { ChangeEvent } from "react";
import type { RootState } from "@redux/types";
import { ProductCardWrapper } from ".";

interface Props extends Crop {}

function CropItem({ name, time, cost, id, sellingPrice }: Props) {
  // hooks
  const dispatch = useDispatch();
  const { crops } = useSelector((state: RootState) => state.preOrder);

  // helper functions
  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;
    const product: Omit<Crop, "id"> = { name, time, cost, sellingPrice };
    checked ? dispatch(addCrop({ [id]: product })) : dispatch(removeCrop(id));
  };

  const isFree = cost === 0;

  return (
    <ProductCardWrapper
      onChange={handleCheckboxChange}
      defaultChecked={!!crops[id]}
    >
      <Box ml={4}>
        <Avatar name={name} size="md" />
      </Box>

      <Box flexBasis="100px" flexGrow={1}>
        <Heading as="h3" size="sm" textTransform="capitalize">
          {name}
        </Heading>
        <Text fontSize="xs" textTransform="uppercase" color="gray.500">
          {prettyTime(time)}
        </Text>
        <Text fontSize="xl">
          <Text as="span" fontSize="sm" color="gray.600">
            {isFree ? "Free" : `$`}
          </Text>

          {!isFree && <Text as="span">{cost}</Text>}
        </Text>
      </Box>
    </ProductCardWrapper>
  );
}

export default CropItem;
