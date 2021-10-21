import { AddOrder } from "@views";
import { getCrops } from "services";

// types
import type { GetStaticProps, InferGetStaticPropsType } from "next";

interface Props {
  crops: CropFromServer[];
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  try {
    const crops = await getCrops();
    if (!crops || !Array.isArray(crops)) {
      throw new Error("[ADD-ORDER] Invalid crops");
    }
    return { props: { crops } };
  } catch (error) {
    return { props: { crops: [] } };
  }
};

function AddOrderPage({
  crops,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <AddOrder crops={crops} />;
}

export default AddOrderPage;
