import { MenuItemProps } from "./models/menuItem.model";

export default function MenuItem({ item, addItem }: MenuItemProps) {
  return (
    <div>
      <button
        className="border-2 border-teal-400 hover:bg-teal-300 w-full p-3 flex justify-between"
        onClick={() => addItem(item)}
      >
        <div>{item.name}</div>
        <p className="font-black">${item.price}</p>
      </button>
    </div>
  );
}
