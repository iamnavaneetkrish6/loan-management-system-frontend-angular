import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerAccountDTO } from 'src/app/model/customer-account-dto';
import { CustomeraccountService } from 'src/app/service/customeraccount.service';

@Component({
  selector: 'app-addaccountdetail',
  templateUrl: './addaccountdetail.component.html',
  styleUrls: ['./addaccountdetail.component.css']
})
export class AddaccountdetailComponent {

  constructor(private customerAccountService: CustomeraccountService,private router: Router) {}


  submitForm(data:CustomerAccountDTO) {
    this.customerAccountService.createCustomerAccount(data)
      .subscribe((response)=> {
        console.log('Response from backend:', response);
        
      });
      alert('Account details added'); 
      this.router.navigate(['/userlogin']); 
    }

}
