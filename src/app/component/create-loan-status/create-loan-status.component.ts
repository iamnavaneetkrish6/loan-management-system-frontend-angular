import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerLoanInformationDTO } from 'src/app/model/customer-loan-information-dto';
import { LoaninformationService } from 'src/app/service/loaninformation.service';

@Component({
  selector: 'app-create-loan-status',
  templateUrl: './create-loan-status.component.html',
  styleUrls: ['./create-loan-status.component.css']
})
export class CreateLoanStatusComponent {

  constructor(private loanInformationService: LoaninformationService,private router: Router) {}


  submitForm(data:CustomerLoanInformationDTO) {
    this.loanInformationService.createCustomerLoanInformation(data)
      .subscribe((response)=> {
        console.log('Response from backend:', response);
        
      });
    }
      goBack ()
      {
        this.router.navigate(['/userdashboard']); 
      }  


}
