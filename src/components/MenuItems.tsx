import type { MenuItems } from "../types";

type MenuItemsProps = {
  item: MenuItems;
  addItem: () => void;
};

function MenuItems({ item, addItem }: MenuItemsProps) {
  return (
    <button
      className="border-2 border-red-500 w-full p-3 flex justify-between hover:bg-red-500 hover:text-white"
      onClick={addItem}
    >
      <p>{item.name}</p>
      <p className="font-black">
        ${new Intl.NumberFormat().format(item.price)}
      </p>
    </button>
  );
}

export default MenuItems;
