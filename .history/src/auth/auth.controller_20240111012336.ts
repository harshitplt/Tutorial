import { Controller, Post, Req } from "@nestjs/common";
import { AuthService } from "./auth.servirce";

@Controller('auth')
export  class AuthController  {
    constructor(private authService: AuthService) { }

    @Post('signup')
    signup(@Req() req: Request) {
        console.log(req.body)
        return this.authService.signup() ;
    }

    @Post('signin')
    signin() {
        return this.authService.login() ;
    }
} 