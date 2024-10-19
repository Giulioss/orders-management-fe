import {HttpInterceptorFn} from '@angular/common/http';

export const baseUrlInterceptor: HttpInterceptorFn = (req, next) => {
  const baseUrl = "http://localhost:8080/orders-management/api/"
  const newRequest = req.clone({
    url: `${baseUrl}${req.url}`
  })

  return next(newRequest);
}
