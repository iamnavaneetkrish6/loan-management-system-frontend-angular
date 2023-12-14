import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoanApplyDTO } from '../model/loan-apply-dto';
import { Observable, find } from 'rxjs';
import { JwtClientService } from './jwt-client.service';

@Injectable({
  providedIn: 'root'
})
export class LoanserviceService {


  constructor(private http:HttpClient, private service:JwtClientService) { }


  baseURL:string = 'http://localhost:8485/api/v1/loan-apply-details/';

  createLoan(body:LoanApplyDTO):Observable<LoanApplyDTO>{
    
    
    
/*     const token = this.jwtService.getToken();
    
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`); */
    
    /* console.log(token);
    console.log(headers); */

    let jwtTokenString=this.service.getjwtToken();
    const headers =  new HttpHeaders().set("Authorization",jwtTokenString);

    
      return this.http.post<LoanApplyDTO>(this.baseURL+"addloan",body,{headers});
    
    }

    getAllAppliedLoan():Observable<LoanApplyDTO[]>{

/*       const token = this.jwtService.getToken();
    
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`); */
     /*  console.log(token);
      console.log(headers); */
      let jwtTokenString=this.service.getjwtToken();
      const headers =  new HttpHeaders().set("Authorization",jwtTokenString);

      return this.http.get<LoanApplyDTO[]>(this.baseURL+"getAllloan",{headers});
    
    
    }
    deleteByLoanNo(loanNo:number):Observable<string>{

/*       const token = this.jwtService.getToken();
    
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`); */
     /*  console.log(token);
      console.log(headers); */
      let jwtTokenString=this.service.getjwtToken();
      const headers =  new HttpHeaders().set("Authorization",jwtTokenString);

      return this.http.delete<string>(this.baseURL + `deleteloan/${loanNo}`, { headers });

      
      }
      

      findByLoanNo(loanNo:number):Observable<LoanApplyDTO>{

/*         const token = this.jwtService.getToken();
    
        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`); */
       /*  console.log(token);
        console.log(headers); */
        let jwtTokenString=this.service.getjwtToken();
        const headers =  new HttpHeaders().set("Authorization",jwtTokenString);

       return this.http.get<LoanApplyDTO>(this.baseURL+`getbyloannumber/${loanNo}`,{headers});
  
      }



      findByName(name:string):Observable<LoanApplyDTO[]>{
/* 
        const token = this.jwtService.getToken();
    
        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`); */
        let jwtTokenString=this.service.getjwtToken();
        const headers =  new HttpHeaders().set("Authorization",jwtTokenString);
     /*    console.log(token);
        console.log(headers); */
        return this.http.get<LoanApplyDTO[]>(this.baseURL+`getByName/${name}`,{headers});
   
       }

       updateByLoanNo(loan: LoanApplyDTO): Observable<LoanApplyDTO> {
/*         const token = this.jwtService.getToken();
        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`); */

        let jwtTokenString=this.service.getjwtToken();
        const headers =  new HttpHeaders().set("Authorization",jwtTokenString);
      
        return this.http.put<LoanApplyDTO>(this.baseURL + `updateloan/${loan.loanNo}`, loan, { headers });
      }
      


}







