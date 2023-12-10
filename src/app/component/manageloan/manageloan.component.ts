import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoanApplyDTO } from 'src/app/model/loan-apply-dto';
import { LoanserviceService } from 'src/app/service/loanservice.service';
import * as saveAs from 'file-saver';
import { FileServiceService } from 'src/app/service/file-service.service';
import { HttpErrorResponse, HttpEvent, HttpEventType } from '@angular/common/http';
import { JwtClientService } from 'src/app/service/jwt-client.service';

@Component({
  selector: 'app-manageloan',
  templateUrl: './manageloan.component.html',
  styleUrls: ['./manageloan.component.css']
})
export class ManageloanComponent {
constructor(private loanService: LoanserviceService,private router: Router, private fileService: FileServiceService, private jwtService: JwtClientService){}

loan:LoanApplyDTO[] = [];
filenames: string[] = [];
fileStatus = { status: '', requestType: '', percent: 0 };
filenameToDownload!:string;
extentsion:string = ".pdf";
ngOninit(){
this.getAllLoan();
}

getAllLoan(){
  this.loanService.getAllAppliedLoan().subscribe(
    (list) => {
      this.loan = list;
      console.log(list);
    },
  );
  
}


approve(loanDetail: LoanApplyDTO) {

  loanDetail.loanStatus = "APPROVED";
  this.updateLoanStatus(loanDetail);
}

reject(loanDetail: LoanApplyDTO) { 
  loanDetail.loanStatus = "REJECT";
  this.updateLoanStatus(loanDetail);
}

updateLoanStatus(loanDetail: LoanApplyDTO) {
  loanDetail.loanOrginationDate = new Date().toISOString().split('T')[0];  
  console.log(loanDetail.loanOrginationDate);
  this.loanService.updateByLoanNo(loanDetail).subscribe(
    updatedLoan => {
  
      console.log("Loan status updated successfully", updatedLoan);
    }
  );
}

documentVerfication(){
  this.router.navigate(['/filedownload']); 
}


goBack(){
  this.router.navigate(['/admin-dashboard']); 
}


onDownloadFile(filenameToDownload: string): void {
  this.fileService.download(filenameToDownload).subscribe(
    event => {
      console.log(event);
      this.resportProgress(event);
    },
    (error: HttpErrorResponse) => {
      console.log(error);
    }
  );
}

private resportProgress(httpEvent: HttpEvent<string[] | Blob>): void {
  switch(httpEvent.type) {
    case HttpEventType.UploadProgress:
      this.updateStatus(httpEvent.loaded, httpEvent.total!, 'Uploading... ');
      break;
    case HttpEventType.DownloadProgress:
      this.updateStatus(httpEvent.loaded, httpEvent.total!, 'Downloading... ');
      break;
    case HttpEventType.ResponseHeader:
      console.log('Header returned', httpEvent);
      break;
    case HttpEventType.Response:
      if (httpEvent.body instanceof Array) {
        this.fileStatus.status = 'done';
        for (const filename of httpEvent.body) {
          this.filenames.unshift(filename);
        }
      } else {
        saveAs(new File([httpEvent.body!], httpEvent.headers.get('File-Name')!, 
                {type: `${httpEvent.headers.get('Content-Type')};charset=utf-8`}));

      }
      this.fileStatus.status = 'done';
      break;
      default:
        console.log(httpEvent);
        break;
    
  }
}
private updateStatus(loaded: number, total: number, requestType: string): void {
  this.fileStatus.status = 'progress';
  this.fileStatus.requestType = requestType;
  this.fileStatus.percent = Math.round(100 * loaded / total);
}
logout() {
  this.jwtService.clearToken();
  this.router.navigate(['']); 
  }
}
