import { AddOrder } from "@views";
import { getCrops, getFeeds } from "services";

// types
import type { GetStaticProps, InferGetStaticPropsType } from "next";

interface Props {
  crops: Crop[];
  feeds: Feed[];
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  try {
    const crops = await getCrops();
    const feeds = await getFeeds();

    if (!crops || !Array.isArray(crops)) {
      throw new Error("[ADD-ORDER] Invalid crops");
    }

    if (!feeds || !Array.isArray(feeds)) {
      throw new Error("[ADD-ORDER] Invalid feeds");
    }

    return { props: { crops, feeds } };
  } catch (error) {
    console.error(error);
    return { props: { crops: [], feeds: [] } };
  }
};

function AddOrderPage({
  crops,
  feeds,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <AddOrder crops={crops} feeds={feeds} />;
}

export default AddOrderPage;
