import { Fragment } from "react/jsx-runtime";
import { useMemo } from "react";
import formatCurrency from "../helpers";
import { OrderItem } from "../types";

type TotalOrderProps = {
  order: OrderItem[];
  tip: number;
};

function TotalOrder({ order, tip }: TotalOrderProps) {
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
      <button></button>
    </Fragment>
  );
}

export default TotalOrder;
