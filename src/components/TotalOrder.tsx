import { Fragment } from "react/jsx-runtime";
import { useMemo } from "react";
import formatCurrency from "../helpers";
import { OrderItem } from "../types";

type TotalOrderProps = {
  order: OrderItem[];
  tip: number;
  placeOrder: () => void;
};

function TotalOrder({ order, tip, placeOrder }: TotalOrderProps) {
  const subTotalAmount = useMemo(
    () => order.reduce((total, item) => total + item.quantity * item.price, 0),
    [order]
  );
  const tipAmount = useMemo(() => subTotalAmount * tip, [tip, order]);
  const totalAmount = useMemo(() => subTotalAmount + tipAmount, [tip, order]);
  return (
    <Fragment>
      <div className="space-y-3">
        <h2 className="font-black text-2xl">Totales y propina</h2>
        <p>
          Subtotal a pagar:{" "}
          <span className="font-bold">{formatCurrency(subTotalAmount)}</span>
        </p>
        <p>
          Propina:{" "}
          <span className="font-bold">{formatCurrency(tipAmount)}</span>
        </p>
        <p>
          Total a pagar:{" "}
          <span className="font-bold">{formatCurrency(totalAmount)}</span>
        </p>
      </div>
      <button
        className="w-full bg-black p-3 font-black uppercase text-white mt-10 hover:bg-gray-800 disabled:opacity-20 disabled:cursor-not-allowed"
        disabled={totalAmount === 0}
        onClick={placeOrder}
      >
        Guardar orden
      </button>
    </Fragment>
  );
}

export default TotalOrder;
