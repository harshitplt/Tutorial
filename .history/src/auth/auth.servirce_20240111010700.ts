import { Injectable } from "@nestjs/common";
import { User, BookMark } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable({})
export class AuthService {
    constructor (private prisma: PrismaService) { }
    
    login() {
        return {msg: 'Welocame to my First Nest Tutorial'};
    }
    
    signup() { 
        return {msg: 'Please Sign Up for my First Nest Tutorial'};
    }
}