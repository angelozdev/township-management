import { Checkbox } from "@chakra-ui/checkbox";
import { Box, StackItem } from "@chakra-ui/layout";

// types
import type { PropsWithChildren } from "react";
import type { CheckboxProps } from "@chakra-ui/checkbox";
interface Props extends CheckboxProps {}

function ProductCardWrapper({
  children,
  onChange,
  defaultChecked,
  ...rest
}: PropsWithChildren<Props>) {
  return (
    <StackItem rounded={8} shadow="md" as="li">
      <Checkbox
        {...rest}
        colorScheme="teal"
        onChange={onChange}
        w="100%"
        p={4}
        defaultChecked={defaultChecked}
      >
        <Box display="flex" gridGap="4" alignItems="center">
          {children}
        </Box>
      </Checkbox>
    </StackItem>
  );
}

export default ProductCardWrapper;
