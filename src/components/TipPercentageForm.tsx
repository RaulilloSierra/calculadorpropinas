import { Dispatch, SetStateAction } from "react";
import { tipOptions } from "../data/tipOptions.ts";

type TipPercentageFormProps = {
  setTip: Dispatch<SetStateAction<number>>;
  tip: number;
};

function TipPercentageForm({ setTip, tip }: TipPercentageFormProps) {
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
              onChange={(e) => setTip(+e.target.value)}
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
