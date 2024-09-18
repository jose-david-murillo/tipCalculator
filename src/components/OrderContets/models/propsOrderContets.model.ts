import { OrderItem } from "../../MenuItem/models/menuItem.model";

export interface PropsOrderContets {
  orderItem: OrderItem[];
  removeItem: (idOrder: number) => void;
}
