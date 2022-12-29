import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoreApiService {
  constructor(private http: HttpClient) {}

  public get(url: string): Observable<any> {
    return this.http.get<any>(url);
  }
}
