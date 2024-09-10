import { Fragment } from "react";
import { menuItems } from "./data/db.ts";

function App() {
  return (
    <Fragment>
      <header className="bg-red-500 py-5 font-black text-white">
        <h1 className="text-center text-4xl">
          Calculadora De Propinas Y Consumo
        </h1>
      </header>
      <main className="max-w-7xl mx-auto mt-10 py-10 grid md:grid-cols-2">
        <div>
          <h2>Menú</h2>
        </div>
        <div>
          <h2>Consumo</h2>
        </div>
      </main>
    </Fragment>
  );
}

export default App;
