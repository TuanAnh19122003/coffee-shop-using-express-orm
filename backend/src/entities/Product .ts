import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import Category from './Category';
import ProductSize from './ProductSize ';

@Entity({ name: "products" })
class Product {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  name?: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
  discount?: number;

  @Column({ type: "nvarchar", length: 255, nullable: true })
  image?: string;

  @Column({ type: "nvarchar", length: 500, nullable: true })
  description?: string;

  @Column({ type: "datetime", default: () => "CURRENT_TIMESTAMP" })
  createdAt?: Date;

  @Column({ type: "datetime", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" })
  updatedAt?: Date;

  @ManyToOne(() => Category, category => category.products)
  category?: Category;

  @OneToMany(() => ProductSize, productSize => productSize.product)
  sizes?: ProductSize[];
}

export default Product;