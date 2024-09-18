import { formatCurrency } from "../../utilities/formatCurrency";
import { PropsOrderContets } from "./models/propsOrderContets.model";

function OrderContets({ orderItem, removeItem }: PropsOrderContets) {
  return (
    <div>
      <h2 className="text-4xl font-black">Consumo</h2>
      <div className="space-y-3 mt-10">
        {orderItem.length === 0 ? (
          <p className="text-center">No hay registros</p>
        ) : (
          orderItem.map((order) => (
            <div
              key={order.id}
              className="mt-8 flex justify-between items-center border-t border-gray-200 py-5 last-of-type:border-b"
            >
              <div>
                <p>
                  {order.name} - {formatCurrency(order.price)}
                </p>
                <p className="font-black">
                  Cantidad: {order.quantity} - subtotal:{" "}
                  {formatCurrency(order.price * order.quantity)}
                </p>
              </div>
              <button
                className="bg-red-500 h-6 w-6 rounded-full text-white"
                onClick={() => removeItem(order.id)}
              >
                X
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default OrderContets;
