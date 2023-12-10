import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoanApplyDTO } from 'src/app/model/loan-apply-dto';
import { JwtClientService } from 'src/app/service/jwt-client.service';
import { LoaninformationService } from 'src/app/service/loaninformation.service';
import { LoanserviceService } from 'src/app/service/loanservice.service';
@Component({
  selector: 'app-applyloan',
  templateUrl: './applyloan.component.html',
  styleUrls: ['./applyloan.component.css']
})
export class ApplyloanComponent {

  loanNo!:number;
  constructor(private loanDetail: LoanserviceService,private router: Router, private jwtService: JwtClientService) {}

  submitForm(data:LoanApplyDTO) {
     this.loanDetail.createLoan(data)
      .subscribe((response)=> {
        console.log('Response from backend:', response);
        this.loanNo = response.loanNo;
        alert(`Loan number: ${this.loanNo} Note this Loan Number to know your loan approval status`); 
        this.router.navigate(['/fileupload']); 

      });
    }
      goBack ()
      {
        this.router.navigate(['/user-dashboard']); 
      }  
      logout() {
        this.jwtService.clearToken();
        this.router.navigate(['']); 
        }

}
