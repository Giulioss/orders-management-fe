import {inject, Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {TOKEN_JWT_LS_KEY} from '../constants/jwt.constants';
import {AuthClient} from '../clients/http-clients/auth.client';


@Injectable({
  providedIn: 'root'
})
/* TODO Giulio Galletti 17/10/2024: Non mi piace ceh il token sia nel localStorage,
    Usare questa guida (https://dev.to/gkoniaris/how-to-securely-store-jwt-tokens-51cf).
    Veloce riassunto: mettere il token come cookie e a backend mettere un controllo (HttpOnly flag)*/
export class TokenService {

  constructor() {}

  set token(token: string) {
    localStorage.setItem(TOKEN_JWT_LS_KEY, token);
  }

  get token(): string {
    return localStorage.getItem(TOKEN_JWT_LS_KEY) as string;
  }

  isAuthenticated(): Observable<boolean> {
    const authClient = inject(AuthClient);
    return authClient.validateToken();
  }
}
