import formatCurrency from "../helpers";
import type { MenuItems } from "../types";

type MenuItemsProps = {
  item: MenuItems;
  addItem: (item: MenuItems) => void;
};

function MenuItems({ item, addItem }: MenuItemsProps) {
  return (
    <button
      className="border-2 border-yellow-800 w-full p-3 flex justify-between hover:bg-yellow-800 hover:text-white"
      onClick={()=>addItem(item)}
    >
      <p>{item.name}</p>
      <p className="font-black">
      {formatCurrency(item.price)}
      </p>
    </button>
  );
}

export default MenuItems;
