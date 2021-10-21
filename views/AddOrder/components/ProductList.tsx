import { Stack } from "@chakra-ui/layout";
import { ProductItem } from "./";

interface Props {
  crops: CropFromServer[];
}

function ProductList({ crops }: Props) {
  return (
    <Stack as="ul" spacing={2}>
      {crops.map(({ id, cost, name, time, selling_price }) => (
        <ProductItem
          key={id}
          cost={cost}
          name={name}
          time={time}
          id={id}
          sellingPrice={selling_price}
        />
      ))}
    </Stack>
  );
}

export default ProductList;
