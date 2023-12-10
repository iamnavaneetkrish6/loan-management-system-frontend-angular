import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CustomerLoanInformationDTO } from '../model/customer-loan-information-dto';
import { Observable } from 'rxjs';
import { JwtClientService } from './jwt-client.service';

@Injectable({
  providedIn: 'root'
})
export class LoaninformationService {
  

  constructor(private http:HttpClient, private jwtService:JwtClientService) { }

  baseURL:string = 'http://localhost:8485/api/v1/customer-loan-information';


  createCustomerLoanInformation(body:CustomerLoanInformationDTO):Observable<CustomerLoanInformationDTO>{


    const token = this.jwtService.getToken();
    
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    console.log(token);
    console.log(headers);
    
    return this.http.post<CustomerLoanInformationDTO>(this.baseURL+"/addcustomerloaninformation",body);
  
  }

  getAllCustomerLoanInformation():Observable<CustomerLoanInformationDTO[]>{


    const token = this.jwtService.getToken();
    
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    console.log(token);
    console.log(headers);

    return this.http.get<CustomerLoanInformationDTO[]>(this.baseURL+"/getAllcustomerloaninformation");
  
  
  }
  deleteByCustomerLoanInformationId(customerLoanInfoId:number):Observable<string>{


    const token = this.jwtService.getToken();
    
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    console.log(token);
    console.log(headers);

    return  this.http.delete<string>(this.baseURL+`/deletecustomerloaninformation/${customerLoanInfoId}`);
    
    }
    

    findByCustomerLoanInformationId(loanNo:number):Observable<CustomerLoanInformationDTO>{

      
    const token = this.jwtService.getToken();
    
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    console.log(token);
    console.log(headers);

     return this.http.get<CustomerLoanInformationDTO>(this.baseURL+`/getbycustomerloaninformationid/${loanNo}`);

    }

    updateByCustomerLoanInformationId(customerLoanInfoId:CustomerLoanInformationDTO):Observable<CustomerLoanInformationDTO>{

      
    const token = this.jwtService.getToken();
    
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    console.log(token);
    console.log(headers);
    

    
      return  this.http.put<CustomerLoanInformationDTO>(this.baseURL+`/updatecustomerloaninformation/${customerLoanInfoId.loanInformationId}`,customerLoanInfoId);
             
  
      
      }


      getAllCustomerLoanInformationByName(name:string):Observable<CustomerLoanInformationDTO[]>{

        
    const token = this.jwtService.getToken();
    
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    console.log(token);
    console.log(headers);
        return this.http.get<CustomerLoanInformationDTO[]>(this.baseURL+`/getloanhistory/${name}`);
      
      
      }

}
