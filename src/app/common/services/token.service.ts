import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {TOKEN_JWT_LS_KEY} from '../constants/jwt.constants';


@Injectable({
  providedIn: 'root'
})
/* TODO Giulio Galletti 17/10/2024: Non mi piace ceh il token sia nel localStorage,
    Usare questa guida (https://dev.to/gkoniaris/how-to-securely-store-jwt-tokens-51cf).
    Veloce riassunto: mettere il token come cookie e a backend mettere un controllo (HttpOnly flag)*/
export class TokenService {

  constructor(private readonly http: HttpClient) {}

  set token(token: string) {
    localStorage.setItem(TOKEN_JWT_LS_KEY, token);
  }

  get token(): string {
    return localStorage.getItem(TOKEN_JWT_LS_KEY) as string;
  }

  isAuthenticated(): Observable<boolean> {
    return this.http.get<boolean>("http://localhost:8080/auth/validate");
  }
}
