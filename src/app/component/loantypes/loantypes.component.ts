import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoanTypeDTO } from 'src/app/model/loan-type-dto';
import { JwtClientService } from 'src/app/service/jwt-client.service';
import { LoantypeService } from 'src/app/service/loantype.service';

@Component({
  selector: 'app-loantypes',
  templateUrl: './loantypes.component.html',
  styleUrls: ['./loantypes.component.css']
})
export class LoantypesComponent {


  loanType:LoanTypeDTO[] = [];

  constructor(private loanTypeService:LoantypeService,private router:Router, private jwtService: JwtClientService){}
  ngOnInit() {
   this.getAllLoanTypes();
  }
  goBack(){
    this.router.navigate(['/user-dashboard']); 
  }
getAllLoanTypes(){
  
    this.loanTypeService.getAllLoanType().subscribe( 
                              (list)=>{ this.loanType = list;  
                                console.log(list)}
                              
                                );




}
logout() {
  this.jwtService.clearToken();
  this.router.navigate(['']); 
  }

}