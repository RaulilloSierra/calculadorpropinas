import { Dispatch } from "react";
import { tipOptions } from "../data/tipOptions.ts";
import { OrderActions } from "../reducers/orderReducer.ts";

type TipPercentageFormProps = {
  dispatch: Dispatch<OrderActions>;
  tip: number;
};

function TipPercentageForm({ dispatch, tip }: TipPercentageFormProps) {
  return (
    <div>
      <h3 className="font-black text-2xl">Propina: </h3>
      <form>
        {tipOptions.map((t) => (
          <div key={t.id} className="flex gap-2">
            <input
              id={t.id}
              type="radio"
              name="tip"
              value={t.value}
              onChange={(e) =>
                dispatch({
                  type: "addTip",
                  payload: { value: +e.target.value },
                })
              }
              checked={t.value === tip}
            />
            <label htmlFor={t.id}>{t.label}</label>
          </div>
        ))}
      </form>
    </div>
  );
}

export default TipPercentageForm;
