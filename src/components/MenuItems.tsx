import { Dispatch } from "react";
import formatCurrency from "../helpers";
import { OrderActions } from "../reducers/orderReducer.ts";
import type { MenuItems } from "../types";

type MenuItemsProps = {
  item: MenuItems;
  dispatch: Dispatch<OrderActions>;
};

function MenuItems({ item, dispatch }: MenuItemsProps) {
  return (
    <button
      className="border-2 border-yellow-800 w-full p-3 flex justify-between hover:bg-yellow-800 hover:text-white"
      onClick={() => dispatch({ type: "addItem", payload: { newOrder: item } })}
    >
      <p>{item.name}</p>
      <p className="font-black">{formatCurrency(item.price)}</p>
    </button>
  );
}

export default MenuItems;
