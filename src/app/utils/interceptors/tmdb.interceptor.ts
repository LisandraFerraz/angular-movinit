
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environment/tmdb-environment';

@Injectable()
export class TMDBInterceptor implements HttpInterceptor {

  private setUrl(url: string ){
    return environment.apiConnectUrl + url + `?api_key=${environment.apiKey}`;
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

      const getTMDBApi = req.clone({
        url: this.setUrl(req.url.replace(environment.apiConnectUrl, '')),
      });
      return next.handle(getTMDBApi);

  }
}
