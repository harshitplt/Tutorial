import { Injectable } from "@nestjs/common";
import { User, BookMark } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import { AuthDto } from "./dto";

@Injectable({})
export class AuthService {
    constructor (private prisma: PrismaService) { }
    
    login() {
        return {msg: 'Welocame to my First Nest Tutorial'};
    }
    
    signup(dto: AuthDto) { 
        return {msg: 'Please Sign Up for my First Nest Tutorial'};
    }
}