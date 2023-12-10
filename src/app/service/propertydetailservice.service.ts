import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PropertyDetailDTO } from '../model/property-detail-dto';
import { Observable } from 'rxjs';
import { JwtClientService } from './jwt-client.service';

@Injectable({
  providedIn: 'root'
})
export class PropertydetailserviceService {

  constructor(private http:HttpClient, private jwtService:JwtClientService) { }

  baseURL:string = 'http://localhost:8485/api/v1/property-details';

  createPropertyDetail(body:PropertyDetailDTO):Observable<PropertyDetailDTO>{
    const token = this.jwtService.getToken();
    
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    console.log(token);
    console.log(headers);

    
    return this.http.post<PropertyDetailDTO>(this.baseURL+"/addpropertydetail",body,{headers});
  
  }

  getAllPropertyDetail():Observable<PropertyDetailDTO[]>{

    const token = this.jwtService.getToken();
    
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    console.log(token);
    console.log(headers);


    return this.http.get<PropertyDetailDTO[]>(this.baseURL+"/getAllpropertydetail",{headers});
  
  
  }
  deleteByPropertyDetailId(propertyId:number):Observable<string>{

    const token = this.jwtService.getToken();
    
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    console.log(token);
    console.log(headers);
    return  this.http.delete<string>(this.baseURL+`/deletepropertydetail/${propertyId}`,{headers});
    
    }
    

    findByPropertyDetailId(propertyId:number):Observable<PropertyDetailDTO[]>{

      const token = this.jwtService.getToken();
    
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      console.log(token);
      console.log(headers);
  
     return this.http.get<PropertyDetailDTO[]>(this.baseURL+`/getbypropertydetailid/${propertyId}`,{headers});

    }

    updateByPropertyDetailId(property:PropertyDetailDTO):Observable<PropertyDetailDTO>{

      const token = this.jwtService.getToken();
    
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      console.log(token);
      console.log(headers);

    
      return  this.http.put<PropertyDetailDTO>(this.baseURL+`/updatepropertydetail/${property.propertyId}`,property,{headers});
             
  
      
      }



}


