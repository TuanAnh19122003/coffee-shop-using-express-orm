import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import User from "./User";

@Entity({ name: "orders" })
class Order {
  @PrimaryGeneratedColumn()
  id?: number;

  @ManyToOne(() => User)
  @JoinColumn({ name: "user_id" })
  user?: User;

  @Column({ type: "nvarchar", length: 255 })
  fullname?: string;

  @Column({ type: "nvarchar", length: 255 })
  email?: string;

  @Column({ type: "nvarchar", length: 20 })
  phone_number?: string;

  @Column({ type: "nvarchar", length: 255 })
  address?: string;

  @Column({ type: "nvarchar", length: 500, nullable: true })
  note?: string;

  @Column({ type: "datetime", default: () => "CURRENT_TIMESTAMP" })
  order_date?: Date;

  @Column({ type: "int", default: 0 })
  status?: number;  // 0: pending, 1: approved

  @Column({ type: "decimal", precision: 10, scale: 2 })
  total?: number;
}

export default Order;
