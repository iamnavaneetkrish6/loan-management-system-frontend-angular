import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PropertyDetailDTO } from 'src/app/model/property-detail-dto';
import { PropertydetailserviceService } from 'src/app/service/propertydetailservice.service';

@Component({
  selector: 'app-addpropertydetail',
  templateUrl: './addpropertydetail.component.html',
  styleUrls: ['./addpropertydetail.component.css']
})
export class AddpropertydetailComponent {

  constructor(private propertyService: PropertydetailserviceService,private router: Router) {}


  submitForm(data:PropertyDetailDTO) {
    this.propertyService.createPropertyDetail(data)
      .subscribe((response)=> {
        console.log('Response from backend:', response);
        
      });
    }
      goBack ()
      {
        this.router.navigate(['/userdashboard']); 
      }  




}
