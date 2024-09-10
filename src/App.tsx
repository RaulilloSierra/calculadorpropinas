import { Fragment } from "react";
import { menuItems } from "./data/db.ts";
import MenuItems from "./components/MenuItems.tsx";
import useOrder from "./hooks/useOrder.ts";

function App() {
  const { addItem } = useOrder()
  return (
    <Fragment>
      <header className="bg-red-500 py-5 font-black text-white">
        <h1 className="text-center text-4xl">
          Calculadora De Propinas Y Consumo
        </h1>
      </header>
      <main className="max-w-7xl mx-auto mt-10 py-10 grid md:grid-cols-2">
        <div>
          <h2 className="text-4xl font-black">Menú</h2>
          <div className="space-y-3 mt-10">
            {menuItems.map((item) => (
              <MenuItems key={item.id} item={item} addItem={addItem} />
            ))}
          </div>
        </div>
        <div>
          <h2>Consumo</h2>
        </div>
      </main>
    </Fragment>
  );
}

export default App;
