import MenuItem from "./components/MenuItem/MenuItem";
import OrderContets from "./components/OrderContets/OrderContets";
import { menuItems } from "./data/db";
import useOrder from "./hooks/useOrder";

function App() {
  const { addItem, order, removeItem } = useOrder();
  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-black">
          Calculadora de Propinas y Consumo
        </h1>
      </header>

      <main className="max-w-7xl mx-auto py-20 grid grid-cols-2">
        <div className="p-5">
          <h2 className="text-4xl font-black">Menú</h2>

          <div className="space-y-3 mt-10">
            {menuItems.map((item) => (
              <MenuItem key={item.id} item={item} addItem={addItem} />
            ))}
          </div>
        </div>
        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
          <OrderContets orderItem={order} removeItem={removeItem} />
        </div>
      </main>
    </>
  );
}

export default App;
