export class LoanApplyDTO {
    loanNo!: number;
    loanTypeName!: string;
    loanAmount!: number;
    loanOrginationDate!: string;
    propertyAddress!: string;
    customerName!: string;
    loanStatus!: string;
    file: File | null = null;
  
    constructor(init?: Partial<LoanApplyDTO>) {
      Object.assign(this, init);
    }
  }