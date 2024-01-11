import { Controller } from "@nestjs/common";
import { AuthService } from "./auth.servirce";

@Controller({})
export  class AuthController  {
    constructor(private authService: AuthService) { 
    }
} 