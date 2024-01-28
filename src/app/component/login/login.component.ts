import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JwtClientService } from 'src/app/service/jwt-client.service';
import { SharedService } from 'src/app/service/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  errorOccured!:boolean;
  id!:string;
  role!:string;
  username!:string;
constructor(private service: JwtClientService, private route: Router,private servicee: SharedService)
{

}


login(data: any) {
  this.service.getToken(data.form.value).subscribe((token) => {
    if (token) {
      this.service.setToken(token);



      this.username = data.form.value.username;

      this.servicee.changeUsername(data.form.value.username);
      this.servicee.setUsername(data.form.value.username);
      sessionStorage.setItem("username", this.username.toString());
      localStorage.setItem("username", this.username);


      this.service.getRole(data.form.value.username).subscribe((role) => {
        sessionStorage.setItem("status", true.toString()); // Use true.toString() instead of true.valueOf.toString()
        sessionStorage.setItem("role", role.toString());

        console.log(sessionStorage.getItem("role"));
        console.log(sessionStorage.getItem("jwttoken"));
        console.log(Boolean(sessionStorage.getItem("status")));

        // Use 'this.role' to store the role for later comparison
        this.role = role.toString();

        this.service.getId(data.form.value.username).subscribe((id) => {
          console.log(id);
          sessionStorage.setItem("id", id.toString());

          // Check the user's role and navigate accordingly
          if (this.role === "ROLE_ADMIN") {
            this.route.navigate(['admin-dashboard']);
          } else {
            this.route.navigate(['user-dashboard']);
          }
        });
      });
    }
  }, (error) => {
    this.errorOccured = true;
  });
}




}
