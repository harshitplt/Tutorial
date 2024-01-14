import { Body, Controller, Post, Req } from "@nestjs/common";
import { AuthService } from "./auth.servirce";
import { dot } from "node:test/reporters";

@Controller('auth')
export  class AuthController  {
    constructor(private authService: AuthService) { }

    @Post('signup')
    signup(@Body() dot: any) {
        console.log({
            dto,
        });
        return this.authService.signup( ) ;
    }

    @Post('signin')
    signin() {
        return this.authService.login() ;
    }
} 