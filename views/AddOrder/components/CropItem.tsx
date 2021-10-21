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

interface Props extends Crop {
  readonly id: CropFromServer["id"];
}

function CropItem({ name, time, cost, id, sellingPrice }: Props) {
  // hooks
  const dispatch = useDispatch();
  const { crops } = useSelector((state: RootState) => state.preOrder);

  // helper functions
  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;
    const product: Crop = { name, time, cost, sellingPrice };
    checked ? dispatch(addCrop({ [id]: product })) : dispatch(removeCrop(id));
  };

  const isFree = cost === 0;

  return (
    <StackItem rounded={8} shadow="md" as="li">
      <Checkbox
        colorScheme="teal"
        onChange={handleCheckboxChange}
        w="100%"
        p={4}
        defaultChecked={!!crops[id]}
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
              <Text as="span" fontSize="sm" color="gray.600">
                {isFree ? "Free" : `$`}
              </Text>

              {!isFree && <Text as="span">{cost}</Text>}
            </Text>
          </Box>
        </Box>
      </Checkbox>
    </StackItem>
  );
}

export default CropItem;
