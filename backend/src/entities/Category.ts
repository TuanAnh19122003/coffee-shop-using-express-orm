import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "categories" })
class Category {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ type: "nvarchar", length: 255 })
  name?: string;
}

export default Category;