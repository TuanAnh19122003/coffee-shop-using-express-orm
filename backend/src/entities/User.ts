import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import Role from "./Role";

@Entity({name: "users"})
class User {
    @PrimaryGeneratedColumn()
    id?: number;
  
    @Column({ type: "nvarchar", length: 255, nullable: true })
    firstName?: string;
  
    @Column({ type: "nvarchar", length: 255, nullable: true })
    lastName?: string;

    @Column({ type: "nvarchar", length: 255, nullable: true })
    image?: string;
  
    @Column({ type: "nvarchar", length: 255, unique: true })
    email?: string;
  
    @Column({ type: "nvarchar", length: 20, nullable: true })
    phone?: string;
  
    @Column({ type: "nvarchar", length: 255, nullable: true })
    address?: string;
  
    @Column({ type: "nvarchar", length: 255, })
    password?: string;

    @Column({ type: "datetime", default: () => "CURRENT_TIMESTAMP" })
    createdAt?: Date;
  
    @Column({ type: "datetime", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" })
    updatedAt?: Date;
  
    @ManyToOne(() => Role)
    @JoinColumn({ name: "role_id" })
    role?: Role;
}

export default User;