import formatCurrency from "../helpers";
import { OrderItem } from "../types";

type OrderContentProps = {
  order: OrderItem[];
  removeItem: (id: OrderItem["id"]) => void;
};

function OrderContent({ order, removeItem }: OrderContentProps) {
  return (
    <div>
      <h2 className="font-black text-4xl">Consumo</h2>
      <div className="space-y-3 mt-10">
        {order.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center border-t border-gray-200 py-5 last-of-type:border-b"
          >
            <div>
              <p className="text-lg">
                {item.name} - {formatCurrency(item.price)}
              </p>
              <p className="font-black">
                Cantidad: {item.quantity} -{" "}
                {formatCurrency(item.price * item.quantity)}
              </p>
            </div>
            <button
              className="bg-red-700 px-5 py-3 text-white font-black hover:bg-red-400 text-sm rounded-md"
              onClick={() => removeItem(item.id)}
            >
              Eliminar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrderContent;
