import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CustomerDetailDTO } from '../model/customer-detail-dto';
import { Observable } from 'rxjs';
import { JwtClientService } from './jwt-client.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerserviceService {

  constructor(private http:HttpClient, private jwtService:JwtClientService) { }


  baseURL:string = 'http://localhost:8485/api/v1/customer-details/';



  createCustomer(body:CustomerDetailDTO):Observable<CustomerDetailDTO>{
    

    return this.http.post<CustomerDetailDTO>(this.baseURL+"addcustomer-detail",body);
  
  }

  getAllCustomer():Observable<CustomerDetailDTO[]>{

    const token = this.jwtService.getToken();
    
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    console.log(token);
    console.log(headers);
    return this.http.get<CustomerDetailDTO[]>(this.baseURL+"getAllcustomer-detail",{headers});
  
  
  }
  deleteByCustomerId(customerId:number):Observable<string>{
    const token = this.jwtService.getToken();
    
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    console.log(token);
    console.log(headers);
    return  this.http.delete<string>(this.baseURL+`deletecustomer-detail/${customerId}`,{headers});
    
    }
    

    findByCustomerId(customerId:number):Observable<CustomerDetailDTO[]>{

      const token = this.jwtService.getToken();
    
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      console.log(token);
      console.log(headers);
     return this.http.get<CustomerDetailDTO[]>(this.baseURL+`getbycustomer-detailid/${customerId}`,{headers});

    }

    updateByCustomerId(customer:CustomerDetailDTO):Observable<CustomerDetailDTO>{
      const token = this.jwtService.getToken();
    
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      console.log(token);
      console.log(headers);
    

    
      return  this.http.put<CustomerDetailDTO>(this.baseURL+`updatecustomer-detail/${customer.customerId}`,customer,{headers});
             
  
      
      }

}
