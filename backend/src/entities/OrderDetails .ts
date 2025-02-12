import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import Product from "./Product ";
import Order from "./Order";

@Entity({ name: "order_details" })
class OrderDetails {
  @PrimaryGeneratedColumn()
  id?: number;

  @ManyToOne(() => Order, order => order.orderDetails)
  order?: Order;

  @ManyToOne(() => Product)
  product?: Product;

  @Column({ type: "nvarchar", length: 50 })
  size?: string;

  @Column({ type: "decimal", precision: 10, scale: 2 })
  price?: number;

  @Column({ type: "int" })
  num?: number;

  @Column({ type: "decimal", precision: 10, scale: 2 })
  total?: number;
}

export default OrderDetails;