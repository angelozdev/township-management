import { Layout, PreOrderItems, Wrapper } from "components";
import { usePreOrderContext } from "context/preorder";

function PreOrder() {
  const { goods, feeds } = usePreOrderContext();

  return (
    <Layout>
      <Wrapper size="lg">
        <PreOrderItems items={goods} title="Goods" />
        <PreOrderItems items={feeds} title="Feeds" />
      </Wrapper>
    </Layout>
  );
}

export default PreOrder;
