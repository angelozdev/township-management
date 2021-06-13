import axios from "axios";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import Select from "react-select";

import { Layout, Wrapper } from "components";
import { Feed, Good } from "types";
import { ChangeEvent, FormEvent, useState } from "react";

interface Props {
  goods: Good[];
  feeds: Feed[];
}

function Home({ goods, feeds }: Props) {
  const router = useRouter();
  const [values, setvalues] = useState<{
    title: string;
    goods: Good[];
    feeds: Feed[];
  }>({
    title: "",
    goods: [],
    feeds: [],
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setvalues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(values);
    router.push("/preorder");
  };

  return (
    <Layout>
      <Wrapper size="md">
        <div className="border p-4 rounded-md">
          <form onSubmit={handleSubmit}>
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
              onChange={(goods) => {
                setvalues({ ...values, goods: [...goods] });
              }}
              isSearchable
              isClearable
              getOptionLabel={({ name, cost }) => `${name} - $${cost}`}
              getOptionValue={({ id }) => id}
            />

            <Select
              onChange={(feeds) => {
                setvalues({ ...values, feeds: [...feeds] });
              }}
              isMulti
              placeholder="Feeds"
              className="mt-2"
              options={feeds}
              isSearchable
              isClearable
              getOptionLabel={({ name }) => name}
              getOptionValue={({ id }) => id}
            />

            <div className="mt-2 text-center">
              <button
                className="p-2 bg-green-600 text-white rounded-md"
                type="submit"
              >
                <span className="px-2">Continue</span>
              </button>
            </div>
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
