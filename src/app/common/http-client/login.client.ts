import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {TokenService} from '../services/token.service';


@Injectable({
  providedIn: "root",
})
export class LoginClient {

  constructor(private readonly http: HttpClient,
              private readonly tokenService: TokenService) {}

  login(request: any) {
    return this.http.post<void>("/api/auth/login", {
      username: request.username,
      password: request.password
    }).subscribe({
      next: (value: any) => this.tokenService.token = value.token,
      error: err => console.error(err)
    })
  }

  registerNewAdmin() {
    return this.http.post("/api/auth/register", {
      username: "giulio2",
      password: "password2"
    }).subscribe({
      next: () => console.log("ciao"),
      error: err => console.error(err)
    })
  }
}
