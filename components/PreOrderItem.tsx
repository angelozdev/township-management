interface Props {
  name: string;
}

function PreOrderItem({ name }: Props) {
  return (
    <li className="p-4 border rounded-sm mb-2">
      <div className="flex justify-between items-center">
        <p>{name}</p>
        <input
          min="1"
          max="99"
          defaultValue="1"
          type="number"
          className="px-2 py-1 border"
        />
      </div>
    </li>
  );
}

export default PreOrderItem;
