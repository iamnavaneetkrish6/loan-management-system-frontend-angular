import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoanApplyDTO } from 'src/app/model/loan-apply-dto';
import { JwtClientService } from 'src/app/service/jwt-client.service';
import { LoanserviceService } from 'src/app/service/loanservice.service';

@Component({
  selector: 'app-loanstatus',
  templateUrl: './loanstatus.component.html',
  styleUrls: ['./loanstatus.component.css']
})
export class LoanstatusComponent {
goBack() {
  this.router.navigate(['/user-dashboard']); }



constructor(private loanService:LoanserviceService, private router: Router, private jwtService: JwtClientService){}

loanNumber!:number;
loanStatus!:string;

getLoanStatus(loanNo: number) {
  this.loanService.findByLoanNo(loanNo).subscribe((response: LoanApplyDTO) => {
    console.log('Response from backend:', response);
    this.loanStatus = response.loanStatus;
  });




}
logout() {
  this.jwtService.clearToken();
  this.router.navigate(['']); 
  }

}
