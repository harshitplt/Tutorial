import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthServices } from "./auth.servirce";

@Module({
    controllers: [AuthController],
    providers: [AuthServices]
})
export class AuthModule {

}