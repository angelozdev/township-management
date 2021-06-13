import { Layout } from "components";
import { usePreOrderContext } from "context/preorder";

function PreOrder() {
  const { goods, feeds } = usePreOrderContext();

  return (
    <Layout>
      <h2 className="text-xl font-semibold">Goods</h2>
      <ul>
        {goods.map((good) => (
          <li key={good.id}>{good.name}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold">Feeds</h2>
      <ul>
        {feeds.map((feed) => (
          <li key={feed.id}>{feed.name}</li>
        ))}
      </ul>
    </Layout>
  );
}

export default PreOrder;
