import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import Order from './Order';

@Entity()
class Payment {
    @PrimaryGeneratedColumn()
    id?: number;

    @OneToOne(() => Order, order => order.payment, { onDelete: 'CASCADE' })
    @JoinColumn()
    order?: Order;

    @Column()
    paymentMethod?: string;

    @Column({ nullable: true })
    transactionId?: string;

    @Column({ default: 0 })
    paymentStatus?: number;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    paidAmount?: number;
}

export default Payment;