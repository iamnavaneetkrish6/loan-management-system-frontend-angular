import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerAccountDTO } from '../model/customer-account-dto';
import { JwtClientService } from './jwt-client.service';

@Injectable({
  providedIn: 'root'
})
export class CustomeraccountService {

  constructor(private http:HttpClient, private jwtService:JwtClientService) { }


  baseURL:string = 'http://localhost:8485/api/v1/customer-account-details/';


  createCustomerAccount(body:CustomerAccountDTO):Observable<CustomerAccountDTO>{


    
    return this.http.post<CustomerAccountDTO>(this.baseURL+"addcustomeraccount-details",body);
  
  }

  getAllCustomerAccount():Observable<CustomerAccountDTO[]>{

    const token = this.jwtService.getToken();
    
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    console.log(token);
    console.log(headers);


    return this.http.get<CustomerAccountDTO[]>(this.baseURL+"getallcustomeraccount-details",{headers});
  
  
  }
  deleteByCustomerAccountId(customerAccId:number):Observable<string>{
    const token = this.jwtService.getToken();
    
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    console.log(token);
    console.log(headers);
    return  this.http.delete<string>(this.baseURL+`deletecustomeraccount-details/${customerAccId}`,{headers});
    
    }
    

    findByCustomerAccountId(customerAccId:number):Observable<CustomerAccountDTO[]>{
      const token = this.jwtService.getToken();
    
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      console.log(token);
      console.log(headers);

     return this.http.get<CustomerAccountDTO[]>(this.baseURL+`getbycustomeraccount-detailsid/${customerAccId}`,{headers});

    }

    updateByCustomerAccountId(customerAcc:CustomerAccountDTO):Observable<CustomerAccountDTO>{

      const token = this.jwtService.getToken();
    
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      console.log(token);
      console.log(headers);

    
      return  this.http.put<CustomerAccountDTO>(this.baseURL+`updatecustomeraccount-details/${customerAcc.accountDetailsId}`,customerAcc,{headers});
             
  
      
      }


}
