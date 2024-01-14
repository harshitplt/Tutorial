import { Injectable } from "@nestjs/common";

@Injectable({})
export class AuthService {
    test () { }
    login() { }
    signup() { 
        return {msg: 'Welocame to my First Nest Tutorial'};
    }
}