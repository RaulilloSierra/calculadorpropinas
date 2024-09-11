import { Dispatch, SetStateAction } from "react";
import { tipOptions } from "../data/tipOptions.ts";

type TipPercentageFormProps = {
  setTip: Dispatch<SetStateAction<number>>;
};

function TipPercentageForm({ setTip }: TipPercentageFormProps) {
  return (
    <div>
      <h3 className="font-black text-2xl">Propina: </h3>
      <form>
        {tipOptions.map((tip) => (
          <div key={tip.id} className="flex gap-2">
            <input
              id={tip.id}
              type="radio"
              name="tip"
              value={tip.value}
              onChange={(e) => setTip(+e.target.value)}
            />
            <label htmlFor={tip.id}>{tip.label}</label>
          </div>
        ))}
      </form>
    </div>
  );
}

export default TipPercentageForm;
