import { ForbiddenException, Injectable } from "@nestjs/common";
import { AuthDto } from "./dto";
import * as argon from "argon2";
import { PrismaService } from "src/prisma/prisma.service";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { error } from "console";

@Injectable()
export class AuthService {
    constructor (private prisma: PrismaService) { }
    
    async login(dto: AuthDto) {        
        // Search fot the User
        const user = await this.prisma.user.findUnique({
            where: {
                email: dto.Email,
            }
        });
        // If the User matches, let them Enter
        if(!user) 
        throw new ForbiddenException(
            'The Credentials are not  matching.',
        );

        // And also Compare the Password
        const pwdmatcher = await argon.verify(user.hash, dto.Password);
        // If the password does not match, then throw the error
        if(!pwdmatcher) 
        throw new ForbiddenException('Cercredentials do not match');    
        
        delete user.hash;
        return user;
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

        throw error;
    }
}