import { Stack } from "@chakra-ui/layout";
import { FeedItem } from "./";

// types
interface Props {
  feeds: Feed[];
}

function FeedList({ feeds = [] }: Props) {
  return (
    <Stack as="ul">
      {feeds.map(({ id, name, materials, sellingPrice, time }) => (
        <FeedItem
          id={id}
          key={id}
          materials={materials}
          name={name}
          sellingPrice={sellingPrice}
          time={time}
        />
      ))}
    </Stack>
  );
}

export default FeedList;
