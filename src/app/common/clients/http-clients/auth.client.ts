import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {TokenService} from '../../services/token.service';
import {Observable} from 'rxjs';
import {AuthRequest} from '../requests/auth.request';
import {AuthResponse} from '../responses/auth.response';


@Injectable({
  providedIn: "root",
})
export class AuthClient {

  constructor(private readonly http: HttpClient,
              private readonly tokenService: TokenService) {}

  login(request: AuthRequest) {
    return this.http.post<AuthResponse>("/api/auth/login", request).subscribe({
      next: (value: AuthResponse) => this.tokenService.token = value.token,
      error: err => console.error(err)
    })
  }

  registerNewAdmin() {
    return this.http.post("/api/auth/register", {
      username: "giulio2",
      password: "password2"
    });
  }

  validateToken(): Observable<boolean> {
    return this.http.get<boolean>("/api/auth/validate");
  }
}
