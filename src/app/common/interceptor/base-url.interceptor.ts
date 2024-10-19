import {HttpInterceptorFn} from '@angular/common/http';
import {environment} from '../../../environment/environment';

export const baseUrlInterceptor: HttpInterceptorFn = (req, next) => {
  const baseUrl = environment.baseUrl
  const newRequest = req.clone({
    url: `${baseUrl}${req.url}`
  })

  return next(newRequest);
}
