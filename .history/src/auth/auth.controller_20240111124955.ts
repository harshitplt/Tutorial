import { Body, Controller, Post, Req } from "@nestjs/common";
import { AuthService } from "./auth.servirce";
import { AuthDto } from "./dto/auth.dto";

@Controller('auth')
export  class AuthController  {
    constructor(private authService: AuthService) { }

    @Post('signup')
    signup(@Body() dto: AuthDto) {
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