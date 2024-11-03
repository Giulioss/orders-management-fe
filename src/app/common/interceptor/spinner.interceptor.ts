import {HttpInterceptorFn} from '@angular/common/http';
import {finalize} from 'rxjs';
import {inject} from '@angular/core';
import {SpinnerService} from '../services/spinner.service';

export const spinnerInterceptor: HttpInterceptorFn = (req, next) => {

  const spinnerService = inject(SpinnerService);
  spinnerService.loadingOn();
  return next(req).pipe(
    finalize(() => {
      debugger;
      spinnerService.loadingOff()
    } )
  );

}
