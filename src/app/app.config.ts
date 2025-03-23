// Application configuration that sets up routing using the provided routes.
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes'; 


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes)
  ]
};
