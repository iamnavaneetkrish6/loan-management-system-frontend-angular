import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoanApplyDTO } from 'src/app/model/loan-apply-dto';
import { JwtClientService } from 'src/app/service/jwt-client.service';
import { LoanserviceService } from 'src/app/service/loanservice.service';

@Component({
  selector: 'app-loanhistory',
  templateUrl: './loanhistory.component.html',
  styleUrls: ['./loanhistory.component.css']
})
export class LoanhistoryComponent {

  loan:LoanApplyDTO[] = [];

  customerName!:string;
  constructor(private loanService:LoanserviceService,private router: Router, private jwtService: JwtClientService){}


 
  getLoanHistory(name:string){
  
    this.loanService.findByName(name).subscribe( 
                              (list)=>{ this.loan = list;  
                                console.log(list)
                              
                              }
                              
                                );




}



goBack(){
  this.router.navigate(['/user-dashboard']); 
}

logout() {
  this.jwtService.clearToken();
  this.router.navigate(['']); 
  }

}