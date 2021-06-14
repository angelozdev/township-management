import { Layout, PreOrderItems, Wrapper } from "components";
import { usePreOrderContext } from "context/preorder";
import { useRouter } from "next/router";

function PreOrder() {
  const { goods, feeds } = usePreOrderContext();
  const router = useRouter();

  return (
    <Layout>
      <Wrapper size="lg">
        <div className="mb-4">
          <button
            className="bg-indigo-800 text-white p-2 rounded-md"
            onClick={() => router.back()}
          >
            <span className="mx-2">⬅️ Back</span>
          </button>
        </div>
        <div className="p-4 border rounded-md">
          <PreOrderItems items={goods} title="Goods" />
          <PreOrderItems items={feeds} title="Feeds" />
        </div>
      </Wrapper>
    </Layout>
  );
}

export default PreOrder;
