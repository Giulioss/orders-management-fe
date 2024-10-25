import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {TokenService} from '../services/token.service';
import {catchError, map} from 'rxjs';

export const authGuard: CanActivateFn = () => {
  const tokenService = inject((TokenService));
  const router = inject(Router);

  if (!tokenService.token) {
    router.navigate(['/login']);
    return false;
  }

  return tokenService.isAuthenticated().pipe(
    map(tokenValidResponse => {
      if (!tokenValidResponse) {
        router.navigate(['/login']);
      }
      return tokenValidResponse
    }),
    catchError(async (err) => {
      console.error(err);
      await router.navigate(['/login']);
      return false;
    })
  )
};
