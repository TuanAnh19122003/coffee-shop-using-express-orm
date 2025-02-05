import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({name: "roles"})
class Role {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ type: "nvarchar", length: 255 })
  name?: string;
}

export default Role;