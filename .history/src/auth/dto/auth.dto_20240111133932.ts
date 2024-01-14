import { IsEmail, IsNotEmpty, IsString } from "class-validator"

export class AuthDto {

    @IsEmail()
    @IsNotEmpty()
    Email: String

    @IsString()
    @IsNotEmpty()
    Password: String
}