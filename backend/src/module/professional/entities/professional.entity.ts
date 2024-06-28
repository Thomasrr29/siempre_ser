import { Patient } from "src/module/patient/entities/patient.entity";
import { Entity, Column } from "typeorm";

@Entity()
export class Professional extends Patient {

    @Column()
    specialty: string;

    @Column()
    licenseNumber: string;

}
