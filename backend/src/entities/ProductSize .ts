import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import Product from "./Product ";

@Entity({ name: "product_sizes" })
class ProductSize {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  size?: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price?: number;

  @ManyToOne(() => Product, product => product.sizes)
  product?: Product;
}

export default ProductSize;