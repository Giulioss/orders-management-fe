import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import {provideHttpClient, withInterceptors} from '@angular/common/http';
import {jwtRequestInterceptor} from './common/interceptor/jwt.interceptor';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {errorInterceptor} from './common/interceptor/error.interceptor';
import {spinnerInterceptor} from './common/interceptor/spinner.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(
      withInterceptors([spinnerInterceptor, jwtRequestInterceptor, errorInterceptor])
    ),
  ]
};
