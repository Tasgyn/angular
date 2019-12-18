import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable()
export class ApiService {

  private API_URL = 'http://localhost:3000/pessoas/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


  constructor(private http: HttpClient) {
  }

  public getAll(): Observable<any> {
    return this.http.get(this.API_URL);
  }

  public post(obj: any): Observable<any> {
   return this.http.post(this.API_URL, obj);

  }

  public get(id: number): Observable<any> {
    return this.http.get(this.API_URL + id);

  }

  public put(obj: any): Observable<any> {
    return this.http.put(this.API_URL + obj.id, obj)
  }

  public delete(id: any): Observable<any> {
    return this.http.delete(this.API_URL + id);
  }

}
