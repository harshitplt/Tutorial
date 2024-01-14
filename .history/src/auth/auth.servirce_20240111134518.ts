import { Injectable } from "@nestjs/common";
import { User, BookMark } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import { AuthDto } from "./dto/auth.dto";
import * as argon from "argon2";

@Injectable({})
export class AuthService {
    constructor (private prisma: PrismaService) { }
    
    login() {
        return {msg: 'Welocame to my First Nest Tutorial'};
    }
    
    signup(dto: AuthDto) { 
        // Generate the new Password for the User
        const hash = argon.hash(dto.Password);
        // Save the Password for the New User in the db
        return {msg: 'Please Sign Up for my First Nest Tutorial'};
    }
}