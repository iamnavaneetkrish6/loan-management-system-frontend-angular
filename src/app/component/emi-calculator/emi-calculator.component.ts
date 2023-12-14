import { Component } from '@angular/core';

@Component({
  selector: 'app-emi-calculator',
  templateUrl: './emi-calculator.component.html',
  styleUrls: ['./emi-calculator.component.css']
})
export class EmiCalculatorComponent {
  loanAmount!: number;
  tenure!: number;
  interest!: number;
  emi!: number ;

  cal() {
    const loanAmount = Number(this.loanAmount);
    const tenure = Number(this.tenure);
    const interest = Number(this.interest);
  
    const outstandingAmount = loanAmount + loanAmount * (interest / 100) * tenure;
    this.emi = parseFloat((outstandingAmount / tenure).toFixed(2));  }

  showEmi: boolean = false;

  calAndShowEmi() {
    this.cal();
    this.showEmi = true;
  }



}
