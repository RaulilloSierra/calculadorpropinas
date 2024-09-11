import { Fragment } from "react";
import { menuItems } from "./data/db.ts";
import MenuItems from "./components/MenuItems.tsx";
import useOrder from "./hooks/useOrder.ts";
import OrderContent from "./components/OrderContent.tsx";

function App() {
  const { addItem, order } = useOrder();
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
              <MenuItems key={item.id} item={item} addItem={addItem} />
            ))}
          </div>
        </div>
        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10 mx-2">
          <OrderContent order={order} />
        </div>
      </main>
    </Fragment>
  );
}

export default App;
