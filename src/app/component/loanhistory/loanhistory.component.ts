import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoanApplyDTO } from 'src/app/model/loan-apply-dto';
import { CustomerserviceService } from 'src/app/service/customerservice.service';
import { JwtClientService } from 'src/app/service/jwt-client.service';
import { LoanserviceService } from 'src/app/service/loanservice.service';
import { SharedService } from 'src/app/service/shared.service';

@Component({
  selector: 'app-loanhistory',
  templateUrl: './loanhistory.component.html',
  styleUrls: ['./loanhistory.component.css']
})
export class LoanhistoryComponent implements OnInit {

  loan:LoanApplyDTO[] = [];

  username!: string ;

  customerName!:string;
  constructor(private loanService:LoanserviceService,private router: Router, private jwtService: JwtClientService, private customerService: CustomerserviceService, private service:SharedService){}
  ngOnInit(): void {
    //this.getNamebyusername();
    this.service.currentUsername.subscribe(username => {
      this.username = username;

      // Call the method that depends on the username (e.g., getLoanHistory)
      this.getLoanHistory();
    });
  }

  customerNamee: string | null = null; 

/* etNamebyusername() {
  this.username = sessionStorage.getItem("username");

  if (this.username !== null) {
    this.customerService.getNamebyUsername(this.username).subscribe(
      response => {
        this.customerNamee = response;
        console.log(response);
        // Call getLoanHistory here or in the callback
        this.getLoanHistory();
      },
      error => {
        console.error("Error getting customer name:", error);
      }
    );
  } else {
    console.error("Username not found in sessionStorage");
  }
} */

getLoanHistory() {

  this.username = this.service.getUsername();
  console.log(this.username);
  this.customerService.getNamebyUsername(this.username).subscribe(
    res => {
      this.customerNamee = res;
      this.loanService.findByName(this.customerNamee).subscribe(
        list => {
          this.loan = list;
          console.log(list);
        },
        error => {
          console.error("Error getting loan history:", error);
        }
      );
    },
    error => {
      console.error("Error getting customer name:", error);
    }
  );
}


delete(loan:number){
  this.loanService.deleteByLoanNo(loan).subscribe(
    reponse => {
      console.log(reponse);
    }
  )
}


goBack(){
  this.router.navigate(['/user-dashboard']); 
}

logout() {
  //this.jwtService.clearToken();
  this.router.navigate(['/userlogin']); 
  }

}