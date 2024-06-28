import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Appoint {

    @PrimaryGeneratedColumn()
    id: number 

    @Column()
    appointDate: Date

    @Column()
    hour: Date

    @Column()
    patient_id: number; 

    @Column()
    professional_id: number;

    @Column()
    status: ["cancelled" | "pending" | "confirmed"];
}
