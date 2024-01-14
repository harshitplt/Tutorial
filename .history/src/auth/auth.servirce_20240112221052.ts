import { Injectable } from "@nestjs/common";
import { User, BookMark } from "@prisma/client";
import { PrismaService } from "prisma/prisma.service";
import { AuthDto } from "./dto";
import * as argon from "argon2";

@Injectable()
export class AuthService {
    constructor (private prisma: PrismaService) { }
    
    login() {
        return {msg: 'Welocame to my First Nest Tutorial'};
    }
    
    async signup(dto: AuthDto) { 
        // Generate the new Password for the User
        const hash = await argon.hash(dto.Password);
        // Save the Password for the New User in the db
        const user = await this.prisma.user.create({
            data: {
                email: dto.Email,
                hash,
            }, 
        });

        delete user.hash;
        return user;
    }
}