import { Feed, Good } from "types";
import { PreOrderItem } from "./";

interface Props {
  items: Array<Feed | Good>;
  title: string;
}

function PreOrderItems({ items, title }: Props) {
  if (!items.length) {
    return null;
  }

  return (
    <section className="mb-4">
      <div className="mb-3">
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>
      <ul>
        {items.map((good) => (
          <PreOrderItem key={good.id} name={good.name} />
        ))}
      </ul>
    </section>
  );
}

export default PreOrderItems;
