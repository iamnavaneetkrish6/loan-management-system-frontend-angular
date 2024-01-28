import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private usernameSource = new BehaviorSubject<string>('');
  currentUsername = this.usernameSource.asObservable();

  username!:string;

  constructor() { }

  setUsername(uname:string){
    this.username = uname;
  }

  getUsername(){
    
    return this.username;
  }



  changeUsername(username: string) {
    this.usernameSource.next(username);
  }
}
