import { Controller } from "@nestjs/common";

@Controller({})
export  class AuthController  {
    constructor(private authService: AuthService) { }
} 