import axios from "axios";
import { GetStaticProps } from "next";
import Select from "react-select";

import { Layout, Wrapper } from "components";
import { Feed, Good } from "types";
import { ChangeEvent, useState } from "react";

interface Props {
  goods: Good[];
  feeds: Feed[];
}

function Home({ goods, feeds }: Props) {
  const [values, setvalues] = useState({
    title: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setvalues({
      ...values,
      [name]: value,
    });
  };

  return (
    <Layout>
      <Wrapper size="md">
        <div className="border p-4 rounded-md">
          <form>
            <div className="mb-4 text-center">
              <h2 className="text-2xl font-semibold">
                {values.title || "Order name"}
              </h2>
            </div>
            <input
              type="text"
              name="title"
              className="p-2 border border-gray-300 rounded-md w-full hover:border-gray-400 placeholder-gray-500"
              placeholder="Order name"
              value={values.title}
              onChange={handleChange}
            />
            <Select
              isMulti
              placeholder="Goods"
              className="mt-2"
              options={goods}
              isSearchable
              isClearable
              getOptionLabel={({ name, cost }) => `${name} - $${cost}`}
              getOptionValue={({ id }) => id}
            />

            <Select
              isMulti
              placeholder="Feeds"
              className="mt-2"
              options={feeds}
              isSearchable
              isClearable
              getOptionLabel={({ name }) => name}
              getOptionValue={({ id }) => id}
            />
          </form>
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
