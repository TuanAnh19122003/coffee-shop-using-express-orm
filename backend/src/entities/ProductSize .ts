import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import Product from "./Product ";

@Entity({ name: "product_sizes" })
class ProductSize {
  @PrimaryGeneratedColumn()
  id?: number;

  @ManyToOne(() => Product)
  @JoinColumn({ name: "product_id" })
  product?: Product;

  @Column({ type: "nvarchar", length: 50 })
  size?: string;

  @Column({ type: "decimal", precision: 10, scale: 2 })
  price?: number;
}

export default ProductSize;