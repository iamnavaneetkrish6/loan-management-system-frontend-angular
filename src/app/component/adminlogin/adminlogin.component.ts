import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthRequest } from 'src/app/model/auth-request';
import { JwtClientService } from 'src/app/service/jwt-client.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {
  response: any;
  token: any;
  authRequest: AuthRequest = new AuthRequest();
  isLoggedIn: boolean = false; 

  gen!:string;
  constructor(private jwtService:JwtClientService, private router: Router) {}

  readFormData(formData: any) {
    this.authRequest.username = formData.form.value.username;
    this.authRequest.password = formData.form.value.password;

    this.getAccessToken(this.authRequest);
  }

  getAccessToken(authRequest: any) {
    let response = this.jwtService.getGeneratedTokenAdmin(authRequest);

    response.subscribe((genToken) => {
      this.token = genToken;

     
      this.jwtService.storeToken(genToken);
      console.log(genToken);
      this.accessApi(this.token);
    });
  }

  accessApi(token: any) {
    let response = this.jwtService.authorizationTest(token);
  
    response.subscribe(
      (responseData) => {
        this.response = responseData;
        console.log(responseData);
        console.log(token);
        if (responseData === true) {
          this.isLoggedIn = true;
          console.log(this.isLoggedIn);
          alert('Login successful'); 
          this.navigateToUserDashboard();
        }
      }
    );
  }



navigateToUserDashboard() {
  this.router.navigate(['/admin-dashboard']);
}
logout() {
  console.log('Logout button clicked'); 
  this.isLoggedIn = false; 
  console.log('isLoggedIn:', this.isLoggedIn); 

  
  this.router.navigate(['/welcome']); 
}
}
