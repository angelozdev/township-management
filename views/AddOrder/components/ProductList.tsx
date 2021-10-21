import { Stack } from "@chakra-ui/layout";
import { ProductItem } from "./";

interface Props {
  crops: Crop[];
}

function ProductList({ crops }: Props) {
  return (
    <Stack as="ul" spacing={2}>
      {crops.map(({ id, cost, name, time }) => (
        <ProductItem key={id} cost={cost} name={name} time={time} />
      ))}
    </Stack>
  );
}

export default ProductList;
