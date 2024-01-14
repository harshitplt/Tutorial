import { Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.servirce";

@Controller('auth')
export  class AuthController  {
    constructor(private authService: AuthService) { }

    @Post('signup')
    signup() {
        return {msg: 'Welocame to my First Nest Tutorial'};
    }

    @Post('signin')
    signin() {
        return 'I am signed in';
    }
} 