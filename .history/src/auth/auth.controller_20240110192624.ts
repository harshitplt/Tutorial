import { Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.servirce";

@Controller({})
export  class AuthController  {
    constructor(private authService: AuthService) { }

    @Post('signup')
    signup() { }

    @Post('signin')
    signin() {}
} 