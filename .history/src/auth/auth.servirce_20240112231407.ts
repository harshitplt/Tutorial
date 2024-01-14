import { ForbiddenException, Injectable } from "@nestjs/common";
import { AuthDto } from "./dto";
import * as argon from "argon2";
import { PrismaService } from "src/prisma/prisma.service";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

@Injectable()
export class AuthService {
    constructor (private prisma: PrismaService) { }
    
    login() {
        return {msg: 'Welocame to my First Nest Tutorial'};
    }
    
    async signup(dto: AuthDto) { 

        try {
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
        
        catch (error) {
            if (
                error instanceof 
                PrismaClientKnownRequestError) {
                if (error.code === 'P2002') {
                    throw new ForbiddenException('Already takken Cerdentials')
                }
            }
        }
    }
}