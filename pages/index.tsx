import axios from "axios";
import { GetStaticProps } from "next";

import { Layout, Wrapper, AddProductsForm } from "components";
import { Feed, Good } from "types";

interface Props {
  goods: Good[];
  feeds: Feed[];
}

function Home({ goods, feeds }: Props) {
  return (
    <Layout>
      <Wrapper size="md">
        <div className="border p-4 rounded-md">
          <AddProductsForm goods={goods} feeds={feeds} />
        </div>
      </Wrapper>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const { data: goods } = await axios
    .get("http://localhost:3000/api/goods")
    .catch((error) => {
      console.error(error);
      return { data: [] };
    });

  const { data: feeds } = await axios
    .get("http://localhost:3000/api/feeds")
    .catch((error) => {
      console.error(error);
      return { data: [] };
    });

  return {
    props: {
      goods,
      feeds,
    },
  };
};

export default Home;
