import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import Category from "./Category";

@Entity({ name: "products" })
class Product {
  @PrimaryGeneratedColumn()
  id?: number;

  @ManyToOne(() => Category)
  @JoinColumn({ name: "category_id" })
  category?: Category;

  @Column({ type: "nvarchar", length: 255 })
  name?: string;

  @Column({ type: "decimal", precision: 10, scale: 2, default: 0 })
  discount?: number;

  @Column({ type: "nvarchar", length: 255, nullable: true })
  image?: string;

  @Column({ type: "nvarchar", length: 500, nullable: true })
  description?: string;

  @Column({ type: "datetime", default: () => "CURRENT_TIMESTAMP" })
  createdAt?: Date;

  @Column({ type: "datetime", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" })
  updatedAt?: Date;
}

export default Product;