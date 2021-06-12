import axios from "axios";
import Head from "next/head";
import { GetStaticProps } from "next";
import { Feed, Good } from "../types";

interface Props {
  goods: Good[];
  feeds: Feed[];
}

function Home({ goods, feeds }: Props) {
  console.log(feeds);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {goods.length === 0 && <p>No items</p>}
        <ul>
          {goods.map((good) => (
            <li key={good.id}>
              <p>
                {good.name} - {good.id}
              </p>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const { data: goods } = await axios.get("http://localhost:3000/api/goods");
    const { data: feeds } = await axios.get("http://localhost:3000/api/feeds");

    return {
      props: {
        goods,
        feeds,
      },
    };
  } catch (error) {
    return {
      props: {
        goods: [],
        feeds: [],
      },
    };
  }
};

export default Home;
