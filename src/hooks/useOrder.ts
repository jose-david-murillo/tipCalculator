import { useState } from "react";
import { OrderItem } from "../components/MenuItem/models/menuItem.model";
import { MenuItem } from "../types/types";

function useOrder() {
  const [order, setOrder] = useState<OrderItem[]>([]);

  const addItem = (item: MenuItem) => {
    const itemExist = order.find((menuItem) => menuItem.id === item.id);

    if (itemExist) {
      const updateOrder = order.map((orderItem) =>
        orderItem.id === item.id
          ? { ...orderItem, quantity: orderItem.quantity + 1 }
          : orderItem
      );

      setOrder(updateOrder);
    } else {
      const newItem = { ...item, quantity: 1 };

      setOrder([...order, newItem]);
    }
  };

  console.log(order);

  const removeItem = (idOrder: number) => {
    const filterDelete = order.filter((orderItem) => {
      return orderItem.id !== idOrder;
    });
    setOrder(filterDelete);
  };

  return {
    addItem,
    order,
    removeItem,
  };
}

export default useOrder;
