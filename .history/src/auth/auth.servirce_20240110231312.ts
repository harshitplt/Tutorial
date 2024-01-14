import { Injectable } from "@nestjs/common";

@Injectable({})
export class AuthService {
    test () { }
    login() {
        return {msg: 'Welocame to my First Nest Tutorial'};
    }
    signup() { 
        return {msg: 'Welocame to my First Nest Tutorial'};
    }
}