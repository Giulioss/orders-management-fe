import {HttpInterceptorFn} from "@angular/common/http";
import {inject} from "@angular/core";
import {TokenService} from '../services/token.service';

export const jwtRequestInterceptor: HttpInterceptorFn = (req, next) => {
  const token = inject(TokenService).token;
  if (token) {
    const headers = req.headers.append("Authorization", `Bearer ${token}`)
    const newRequest = req.clone({headers});

    return next(newRequest)
  }

  return next(req);
}
