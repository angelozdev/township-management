import { AddOrder } from "@views";
import { getCrops, getFeeds } from "services";

// types
import type { GetStaticProps, InferGetStaticPropsType } from "next";
import { getDoc } from "@firebase/firestore";

interface Props {
  crops: CropFromServer[];
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  try {
    const crops = await getCrops();
    const feeds = await getFeeds();

    console.log(feeds);

    if (!crops || !Array.isArray(crops)) {
      throw new Error("[ADD-ORDER] Invalid crops");
    }
    return { props: { crops } };
  } catch (error) {
    console.error(error);
    return { props: { crops: [] } };
  }
};

function AddOrderPage({
  crops,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <AddOrder crops={crops} />;
}

export default AddOrderPage;
