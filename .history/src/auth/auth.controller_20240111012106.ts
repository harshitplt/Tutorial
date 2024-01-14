import { Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.servirce";

@Controller('auth')
export  class AuthController  {
    constructor(private authService: AuthService) { }

    @Post('signup')
    signup(@Req() req: Request) {
        return this.authService.signup() ;
    }

    @Post('signin')
    signin() {
        return this.authService.login() ;
    }
} 