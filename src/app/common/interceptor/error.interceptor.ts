import {HttpErrorResponse, HttpInterceptorFn} from '@angular/common/http';
import {catchError, throwError} from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401) {
        // TODO Giulio Galletti 22/10/2024: Tornare alla login
        console.error("Error credenziali")
      }

      return throwError(() => error)
    })
  );
}
