import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JwtClientService } from 'src/app/service/jwt-client.service';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent {
  constructor(private router: Router,private jwtService:JwtClientService) {}

  applyLoan() {
   
   this.router.navigate(['applyloan']);
  }

  loanStatus() {
    this.router.navigate(['/loanstatus']);
  }

  loanHistory() {
    
     this.router.navigate(['/loanhistory']);
  }
  loanTypes()
  {
    this.router.navigate(['/loantypes']);
  
  }
  logout() {
    this.jwtService.clearToken();
    this.router.navigate(['']); 
    }
  
}
