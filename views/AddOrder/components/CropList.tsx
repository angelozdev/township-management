import { Stack } from "@chakra-ui/layout";
import { CropItem } from "./";

interface Props {
  crops: CropFromServer[];
}

function CropList({ crops }: Props) {
  return (
    <Stack as="ul" spacing={2}>
      {crops.map(({ id, cost, name, time, selling_price }) => (
        <CropItem
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

export default CropList;
