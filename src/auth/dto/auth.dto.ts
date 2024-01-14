import { IsEmail, IsNotEmpty, IsString } from "class-validator"

export class AuthDto {

    @IsEmail()
    @IsNotEmpty()
    Email: string

    @IsString()
    @IsNotEmpty()
    Password: string
}