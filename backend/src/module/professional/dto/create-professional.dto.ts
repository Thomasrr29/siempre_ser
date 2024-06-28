import { IsString, IsNotEmpty, IsDate } from "class-validator"

export class CreateProfessionalDto {

    @IsString()
    @IsNotEmpty()
    name: string

    @IsString()
    @IsNotEmpty()
    email: string

    @IsDate()
    @IsNotEmpty()
    birthDate: Date

    @IsString()
    @IsNotEmpty()
    password: string

    @IsString()
    @IsNotEmpty()
    specialty: string;

    @IsString()
    @IsNotEmpty()
    licenseNumber: string;

}
