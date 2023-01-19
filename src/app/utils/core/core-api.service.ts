import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoreApiService {
  constructor(private http: HttpClient) {}

  public get(url: string, opts?: any): Observable<any> {
    return this.http.get<any>(url);
  }

  public post(url: string, body?: any, opts?: any):Observable<any>{
    return this.http.post<any>(url, body, opts)
  }
}
