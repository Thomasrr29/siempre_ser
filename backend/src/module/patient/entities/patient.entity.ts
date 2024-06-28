import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"


@Entity()
export class Patient {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    birthDate: Date;

    @Column()
    password: string;

    @Column()
    rol_id: number;

    @Column()
    cellphone: number
}
