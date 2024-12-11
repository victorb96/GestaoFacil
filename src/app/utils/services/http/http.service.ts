import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  postRequest<T>(target: string, body: any = null): Observable<T> {
    return this._http.post<T>(`${environment.target}/${target}`, body);
  }

  getRequest<T>(target: string, filters: HttpParams): Observable<T> {
    return this._http.get<T>(`${environment.target}/${target}`, {
      params: filters
    });
  }

  putRequest<T>(target: string, body: any = null): Observable<T> {
    return this._http.put<T>(`${environment.target}/${target}`, body);
  }

  deleteRequest<T>(target: string, filters: HttpParams): Observable<T> {
    return this._http.delete<T>(`${environment.target}/${target}`, {
      params: filters
    });
  }
}
