import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthRequest } from 'src/app/model/auth-request';
import { JwtClientService } from 'src/app/service/jwt-client.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent {
  response: any;
  token: any;
  authRequest: AuthRequest = new AuthRequest();
  isLoggedIn: boolean = false; 

  constructor(private jwtService:JwtClientService, private router: Router) {}

  readFormData(formData: any) {
    this.authRequest.username = formData.form.value.username;
    this.authRequest.password = formData.form.value.password;

    this.getAccessToken(this.authRequest);
  }

  getAccessToken(authRequest: any) {
    let response = this.jwtService.getGeneratedTokenuser(authRequest);

    response.subscribe((genToken) => {
      this.token = genToken;
     
      this.jwtService.storeToken(genToken);
      console.log(genToken);
      this.accessApi(genToken);
    });
  }

  accessApi(token: any) {
    let response = this.jwtService.authorizationTestForUser(token);
  
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
  this.router.navigate(['/user-dashboard']);
}
logout() {
  console.log('Logout button clicked'); 
  this.isLoggedIn = false; 
  console.log('isLoggedIn:', this.isLoggedIn); 

  
  this.router.navigate(['/welcome']); 
}
}
