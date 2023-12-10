import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerDetailDTO } from 'src/app/model/customer-detail-dto';
import { CustomerserviceService } from 'src/app/service/customerservice.service';


@Component({
  selector: 'app-userregistration',
  templateUrl: './userregistration.component.html',
  styleUrls: ['./userregistration.component.css']
})
export class UserregistrationComponent {

  constructor(private customerService: CustomerserviceService,private router: Router) {}

  submitForm(data:CustomerDetailDTO) {
    this.customerService.createCustomer(data)
      .subscribe((response)=> {
        console.log('Response from backend:', response);
        
      });
      this.router.navigate(['/addaccountdetail']); 
    }
      goBack ()
      {
        this.router.navigate(['/userlogin']); 
      }  
  }

