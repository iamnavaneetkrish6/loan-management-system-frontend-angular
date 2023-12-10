import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoanTypeDTO } from '../model/loan-type-dto';
import { Observable } from 'rxjs';
import { JwtClientService } from './jwt-client.service';

@Injectable({
  providedIn: 'root'
})
export class LoantypeService {

  constructor(private http:HttpClient, private jwtService:JwtClientService) { }


  baseURL:string = 'http://localhost:8485/api/v1/loan-type';


  createLoanType(body:LoanTypeDTO):Observable<LoanTypeDTO>{
    const token = this.jwtService.getToken();
    
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    console.log(token);
    console.log(headers);

    
    return this.http.post<LoanTypeDTO>(this.baseURL+"/addloantype",body,{headers});
  
  }

  getAllLoanType():Observable<LoanTypeDTO[]>{
    const token = this.jwtService.getToken();
    
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    console.log(token);
    console.log(headers);
    return this.http.get<LoanTypeDTO[]>(this.baseURL+"/getAllloantype",{headers});
  
  
  }
  deleteByLoanTypeId(loanTypeId:number):Observable<string>{

    return  this.http.delete<string>(this.baseURL+`/deleteloantype/${loanTypeId}`);
    
    }
    

    findByLoanTypeId(loanTypeId:number):Observable<LoanTypeDTO[]>{

      const token = this.jwtService.getToken();
    
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      console.log(token);
      console.log(headers);

     return this.http.get<LoanTypeDTO[]>(this.baseURL+`/getbyloantypeid/${loanTypeId}`,{headers});

    }

    updateByLoanTypeId(loanType:LoanTypeDTO):Observable<LoanTypeDTO>{
      const token = this.jwtService.getToken();
    
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      console.log(token);
      console.log(headers);
    

    
      return  this.http.put<LoanTypeDTO>(this.baseURL+`/updateloantype/${loanType.loanTypeId}`,loanType,{headers});
             
  
      
      }


}
