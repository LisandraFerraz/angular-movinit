
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environmentTMDB } from '../environment/tmdb-environment';

@Injectable({
  providedIn: 'root'
})
export class TMDBInterceptor implements HttpInterceptor {

  private setUrl(url: string ){
    return environmentTMDB.apiConnectUrl + url + `?api_key=${environmentTMDB.apiKey}`;
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

      const getTMDBApi = req.clone({
        url: this.setUrl(req.url.replace(environmentTMDB.apiConnectUrl, '')),
      });
      return next.handle(getTMDBApi);

  }
}
