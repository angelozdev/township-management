import axios from "axios";
import { GetStaticProps } from "next";

import { Layout } from "components";
import { Feed, Good } from "types";

interface Props {
  goods: Good[];
  feeds: Feed[];
}

function Home({ goods }: Props) {
  return (
    <Layout>
      {goods.length === 0 ? (
        <p>No items</p>
      ) : (
        <ul>
          {goods.map((good) => (
            <li key={good.id}>
              <p>
                {good.name} - {good.id}
              </p>
            </li>
          ))}
        </ul>
      )}
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
