import { Fragment, useReducer } from "react";
import { menuItems } from "./data/db.ts";
import MenuItems from "./components/MenuItems.tsx";
import OrderContent from "./components/OrderContent.tsx";
import TotalOrder from "./components/TotalOrder.tsx";
import TipPercentageForm from "./components/TipPercentageForm.tsx";
import { initialState, orderReducer } from "./reducers/orderReducer.ts";

function App() {
  const [state, dispatch] = useReducer(orderReducer, initialState);
  return (
    <Fragment>
      <header className="bg-yellow-800 py-5 font-black text-white">
        <h1 className="text-center text-4xl">
          Calculadora De Propinas Y Consumo
        </h1>
      </header>
      <main className="max-w-7xl mx-auto mt-10 py-10 grid md:grid-cols-2 ">
        <div className="mx-2">
          <h2 className="text-4xl font-black">Menú</h2>
          <div className="space-y-3 mt-10">
            {menuItems.map((item) => (
              <MenuItems key={item.id} item={item} dispatch={dispatch} />
            ))}
          </div>
        </div>
        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10 mx-2">
          {state.order.length > 0 ? (
            <Fragment>
              <OrderContent order={state.order} dispatch={dispatch} />
              <TipPercentageForm dispatch={dispatch} tip={state.tip} />
              <TotalOrder order={state.order} tip={state.tip} dispatch={dispatch} />
            </Fragment>
          ) : (
            <Fragment>
              <h2 className="font-black text-4xl">Consumo</h2>
              <p className="text-center">La orden está vacía</p>
            </Fragment>
          )}
        </div>
      </main>
    </Fragment>
  );
}

export default App;
