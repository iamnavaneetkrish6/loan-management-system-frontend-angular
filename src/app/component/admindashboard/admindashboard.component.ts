import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JwtClientService } from 'src/app/service/jwt-client.service';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent {

  constructor(private router: Router, private jwtService: JwtClientService) { }

  manageLoans() {
    
    this.router.navigate(['/manage-loan']); 
  }
  logout() {
    this.jwtService.clearToken();
    this.router.navigate(['']); 
    }

/*   manageUsers() {
    
    this.router.navigate(['/manageuser']); 
  } */

}
