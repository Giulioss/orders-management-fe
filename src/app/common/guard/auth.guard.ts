import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {TokenService} from '../services/token.service';
import {catchError, map} from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const tokenService = inject((TokenService));
  const router = inject(Router);

  return tokenService.isAuthenticated().pipe(
    map(tokenValidResponse => {
      return tokenValidResponse ?? router.navigate(['/login']);
    }),
    catchError(async (err) => {
      console.error(err);
      await router.navigate(['/login']);
      return false;
    })
  )
};
