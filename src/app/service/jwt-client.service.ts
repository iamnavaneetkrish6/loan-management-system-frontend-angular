import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JwtClientService {

  private tokenKey: string = 'jwtToken';
  constructor(private http:HttpClient) { }

    baseURL:string = 'http://localhost:8485/api/login/';





    getGeneratedTokenuser(requestBody: any){

      return this.http.post(this.baseURL+"customerlogin",requestBody,{responseType: 'text' as 'json'});

  }
  getGeneratedTokenAdmin(requestBody: any){

    return this.http.post(this.baseURL+"adminlogin",requestBody,{responseType: 'text' as 'json'});

}
  storeToken(token: any): void {
    localStorage.setItem(this.tokenKey,token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  clearToken(): void {
    localStorage.removeItem(this.tokenKey);
  } 

  authorizationTest(token:any){

    const userAuthorized = !!token; // For demonstration, considers any non-empty token as authorized

    return of(userAuthorized);

  }



  authorizationTestForUser(token: any): Observable<boolean> {
    // Simulate successful user login based on a valid token (You'll need to implement actual token validation logic here)
    // For example, if the token exists and is not expired, consider the user authorized
    const userAuthorized = !!token; // For demonstration, considers any non-empty token as authorized

    return of(userAuthorized); // Returning an observable of boolean using 'of' operator
  }





}
