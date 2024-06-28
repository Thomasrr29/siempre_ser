import { IsDataURI, IsDate, IsNotEmpty, IsString } from "class-validator"

export class CreatePatientDto {

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
}
