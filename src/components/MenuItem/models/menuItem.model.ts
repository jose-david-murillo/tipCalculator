import { MenuItem } from "../../../types/types";

export interface MenuItemProps {
  item: MenuItem;
  addItem: (item: MenuItem) => void;
}

export type OrderItem = MenuItem & {
  quantity: number;
};
