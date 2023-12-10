import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtClientService } from './jwt-client.service';

@Injectable({
  providedIn: 'root'
})
export class FileServiceService {

  private server = 'http://localhost:8485/api/v1/file-resource/';

  constructor(private http: HttpClient,private jwtService: JwtClientService) {}

  // define function to upload files
  upload(formData: FormData): Observable<HttpEvent<string[]>> {

    const token = this.jwtService.getToken();
    
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    console.log(token);
    console.log(headers);

    return this.http.post<string[]>(`${this.server}upload`, formData, {
      headers: headers,
      reportProgress: true,
      observe: 'events'
    });
  }

  // define function to download files
  download(filename: string): Observable<HttpEvent<Blob>> {

    const token = this.jwtService.getToken();
    
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    console.log(token);
    console.log(headers);

    return this.http.get(`${this.server}download/${filename}`, {
      headers: headers,
      reportProgress: true,
      observe: 'events',
      responseType: 'blob'
    });
  }
}
