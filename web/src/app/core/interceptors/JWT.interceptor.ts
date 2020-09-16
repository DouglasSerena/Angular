import { Injectable, NgModule } from '@angular/core';
import { Observable } from 'rxjs';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';

import { environment } from 'src/environments/environment.local';

@Injectable()
export class JWTInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.url.match(environment.API)) {
      const resClone = req.clone({
        headers: req.headers.set('Authorization', environment.PAINEL_JWT),
      });
      return next.handle(resClone);
    }
    return next.handle(req);
  }
}
