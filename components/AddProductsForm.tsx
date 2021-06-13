import { ChangeEvent, FormEvent } from "react";
import Select from "react-select";
import { useRouter } from "next/router";

import { usePreOrderContext } from "context/preorder";
import { Feed, Good } from "types";

interface Props {
  goods: Good[];
  feeds: Feed[];
}

function AddProductsForm({ goods, feeds }: Props) {
  const preOrder = usePreOrderContext();
  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    preOrder.setPreOrder({
      ...preOrder,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    router.push("/preorder");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4 text-center">
        <h2 className="text-2xl font-semibold">
          {preOrder.title || "Order name"}
        </h2>
      </div>
      <input
        type="text"
        name="title"
        className="p-2 border border-gray-300 rounded-md w-full hover:border-gray-400 placeholder-gray-500"
        placeholder="Order name"
        value={preOrder.title}
        onChange={handleChange}
      />
      <Select
        isMulti
        placeholder="Goods"
        className="mt-2"
        options={goods}
        onChange={(goods) => {
          preOrder.setPreOrder({ ...preOrder, goods: [...goods] });
        }}
        defaultValue={preOrder.goods}
        isSearchable
        isClearable
        name="goods"
        getOptionLabel={({ name, cost }) => `${name} - $${cost}`}
        getOptionValue={({ id }) => id}
      />

      <Select
        onChange={(feeds) => {
          preOrder.setPreOrder({ ...preOrder, feeds: [...feeds] });
        }}
        isMulti
        placeholder="Feeds"
        className="mt-2"
        options={feeds}
        defaultValue={preOrder.feeds}
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
  );
}

export default AddProductsForm;
