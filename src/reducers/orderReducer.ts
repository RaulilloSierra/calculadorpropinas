import { MenuItems, OrderItem } from "../types";

export type OrderActions =
  | { type: "addItem"; payload: { newOrder: MenuItems } }
  | { type: "removeItem"; payload: { id: OrderItem["id"] } }
  | { type: "addTip"; payload: { value: number } }
  | { type: "placeOrder" };

export type OrderState = {
  order: OrderItem[];
  tip: number;
};

export const initialState: OrderState = {
  order: [],
  tip: 0,
};

export const orderReducer = (
  state: OrderState = initialState,
  action: OrderActions
) => {
  switch (action.type) {
    case "addItem":
      const itemExist = state.order.find(
        (orderItem) => orderItem.id === action.payload.newOrder.id
      );
      let updateOrder: OrderItem[] = [];
      if (itemExist) {
        updateOrder = state.order.map((orderItem) =>
          orderItem.id === action.payload.newOrder.id
            ? { ...orderItem, quantity: orderItem.quantity + 1 }
            : orderItem
        );
      } else {
        const newItem = { ...action.payload.newOrder, quantity: 1 };
        updateOrder = [...state.order, newItem];
      }
      return {
        ...state,
        order: updateOrder,
      };

    case "removeItem":
      return {
        ...state,
        order: state.order.filter((item) => item.id !== action.payload.id),
      };

    case "addTip":
      const tip = action.payload.value;
      return {
        ...state,
        tip,
      };

    case "placeOrder":
      return {
        ...state,
        order: [],
        tip: 0,
      };

    default:
      return {
        ...state,
      };
  }
};
