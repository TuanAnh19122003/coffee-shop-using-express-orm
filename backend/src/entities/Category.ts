import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import Product from './Product ';

@Entity({ name: "categories" })
class Category {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ type: "nvarchar", length: 255 })
  name?: string;

  @OneToMany(() => Product, product => product.category)
  products?: Product[];
}

export default Category;