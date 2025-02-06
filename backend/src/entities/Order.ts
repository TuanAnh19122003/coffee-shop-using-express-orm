import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, OneToOne } from "typeorm";
import User from "./User";
import Payment from "./Payment";
import OrderDetails from "./OrderDetails ";

@Entity({ name: "orders" })
class Order {
  @PrimaryGeneratedColumn()
  id?: number;

  @ManyToOne(() => User, user => user.orders)
  user?: User;

  @Column({ type: "nvarchar", length: 255 })
  fullname?: string;

  @Column({ type: "nvarchar", length: 255 })
  email?: string;

  @Column({ type: "nvarchar", length: 10 })
  phoneNumber?: string;

  @Column({ type: "nvarchar", length: 255 })
  address?: string;

  @Column({ type: "nvarchar", length: 500, nullable: true })
  note?: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  total?: number;

  @Column({ type: "int", default: 0 })
  status?: number;  // 0: pending, 1: approved

  @Column({ type: "datetime", default: () => "CURRENT_TIMESTAMP" })
  order_date?: Date;

  @OneToMany(() => OrderDetails, orderDetails => orderDetails.order)
  orderDetails?: OrderDetails[];

  @OneToOne(() => Payment, payment => payment.order)
  payment?: Payment;
}

export default Order;
