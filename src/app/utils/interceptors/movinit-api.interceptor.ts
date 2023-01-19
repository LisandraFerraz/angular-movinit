import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { enviromentApi } from "../environment/tmdb-environment";

@Injectable({
  providedIn: 'root'
})
export class MovinitInterceptor implements HttpInterceptor{

  private setUrl(url: string){
    return enviromentApi.apiConnectUrl + url
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>>{

      const getAppAPI = req.clone({
        url: this.setUrl(req.url.replace(enviromentApi.apiConnectUrl, ''))
      })

    return next.handle(getAppAPI)
  }
}
