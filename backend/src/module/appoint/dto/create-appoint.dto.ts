import { IsString, IsDate, IsNotEmpty, IsNumber } from "class-validator";

export class CreateAppointDto {
    
    @IsNotEmpty()
    @IsDate()
    appointDate: Date

    @IsNotEmpty()
    @IsDate()
    hour: Date

    @IsNumber()
    @IsNotEmpty()
    patient_id: number;
    
    @IsNumber()
    @IsNotEmpty()
    professional_id: number;

    @IsNotEmpty()
    status: ["cancelled" | "pending" | "confirmed"];
}
