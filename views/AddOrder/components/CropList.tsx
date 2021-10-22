import { Stack } from "@chakra-ui/layout";
import { CropItem } from "./";

interface Props {
  crops: Crop[];
}

function CropList({ crops }: Props) {
  return (
    <Stack as="ul" spacing={2}>
      {crops.map(({ id, cost, name, time, sellingPrice }) => (
        <CropItem
          key={id}
          cost={cost}
          name={name}
          time={time}
          id={id}
          sellingPrice={sellingPrice}
        />
      ))}
    </Stack>
  );
}

export default CropList;
