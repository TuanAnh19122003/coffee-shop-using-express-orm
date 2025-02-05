import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "feedbacks" })
class Feedback {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ type: "nvarchar", length: 255 })
  firstName?: string;

  @Column({ type: "nvarchar", length: 255 })
  lastName?: string;

  @Column({ type: "nvarchar", length: 255 })
  email?: string;

  @Column({ type: "nvarchar", length: 20 })
  phoneNumber?: string;

  @Column({ type: "nvarchar", length: 255 })
  subjectName?: string;

  @Column({ type: "nvarchar", length: 500 })
  note?: string;
}

export default Feedback;
