import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import Role from './Role'; 
import Order from './Order';

@Entity({name: "users"})
class User {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column({ nullable: true })
    firstName?: string;

    @Column({ nullable: true })
    lastName?: string;

    @Column({ unique: true })
    email?: string;

    @Column({ nullable: true })
    phone?: string;

    @Column({ nullable: true })
    address?: string;

    @Column()
    password?: string;

    @ManyToOne(() => Role, role => role.users)
    role?: Role;

    @OneToMany(() => Order, order => order.user)
    orders?: Order[];
}

export default User;