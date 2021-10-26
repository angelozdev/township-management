import { Text } from "@chakra-ui/layout";
import { ProductCardWrapper } from "./";

// types
interface Props extends Feed {}

function FeedItem({ name }: Props) {
  return (
    <ProductCardWrapper>
      <Text textTransform="capitalize">{name}</Text>
    </ProductCardWrapper>
  );
}

export default FeedItem;
