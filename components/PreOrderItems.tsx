import { PreOrderItem } from "./";

interface Props<T = any> {
  items: Array<T>;
  title: string;
}

function PreOrderItems<T>({ items, title }: Props<T>) {
  if (!items.length) {
    return null;
  }

  return (
    <section className="mb-4">
      <div className="mb-3">
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>
      <ul>
        {items.map((good: any) => (
          <PreOrderItem key={good.id} name={good.name} />
        ))}
      </ul>
    </section>
  );
}

export default PreOrderItems;
