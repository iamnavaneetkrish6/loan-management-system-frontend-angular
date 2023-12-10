import { HttpErrorResponse, HttpEvent, HttpEventType } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { saveAs } from 'file-saver';
import { FileServiceService } from 'src/app/service/file-service.service';

@Component({
  selector: 'app-file-handling',
  templateUrl: './file-handling.component.html',
  styleUrls: ['./file-handling.component.css']
})
export class FileHandlingComponent {
  filenames: string[] = [];
  fileStatus = { status: '', requestType: '', percent: 0 };
  
  constructor(private fileService: FileServiceService, private router: Router) {
    this.fileStatus = { status: '', requestType: '', percent: 0 };
    this.filenames = [];
  }

  // define a function to upload files
  onUploadFiles(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files) {
      const formData = new FormData();
      for (const file of Array.from(inputElement.files)) {
        formData.append('files', file, file.name);
      }
      this.fileService.upload(formData).subscribe(
        event => {
          console.log(event);
          this.resportProgress(event);
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      );
    }
  }
  

  // define a function to download files
  onDownloadFile(filename: string): void {
    this.fileService.download(filename).subscribe(
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

  goBack(){
    this.router.navigate(['/user-dashboard']); 
  }

}


