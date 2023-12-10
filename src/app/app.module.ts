import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './component/about/about.component';
import { AdmindashboardComponent } from './component/admindashboard/admindashboard.component';
import { AppLayoutComponent } from './component/app-layout/app-layout.component';
import { ContactComponent } from './component/contact/contact.component';
import { HomeComponent } from './component/home/home.component';
import { UserdashboardComponent } from './component/userdashboard/userdashboard.component';
import { UserloginComponent } from './component/userlogin/userlogin.component';
import { UserregistrationComponent } from './component/userregistration/userregistration.component';
import { WelcomeComponent } from './component/welcome/welcome.component';
import { FooterComponent } from './component/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApplyloanComponent } from './component/applyloan/applyloan.component';
import { LoanstatusComponent } from './component/loanstatus/loanstatus.component';
import { LoanhistoryComponent } from './component/loanhistory/loanhistory.component';
import { LoantypesComponent } from './component/loantypes/loantypes.component';
import { ManageloanComponent } from './component/manageloan/manageloan.component';
import { ManageuserComponent } from './component/manageuser/manageuser.component';
import { LoginComponent } from './component/login/login.component';
import { AdminloginComponent } from './component/adminlogin/adminlogin.component';
import { AddpropertydetailComponent } from './component/addpropertydetail/addpropertydetail.component';
import { AddaccountdetailComponent } from './component/addaccountdetail/addaccountdetail.component';
import { CreateLoanStatusComponent } from './component/create-loan-status/create-loan-status.component';
import { LoanManageComponent } from './component/loan-manage/loan-manage.component';
import { FileHandlingComponent } from './component/file-handling/file-handling.component';
import { FileDownloadComponent } from './component/file-download/file-download.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AdmindashboardComponent,
    AppLayoutComponent,
    ContactComponent,
    HomeComponent,
    UserdashboardComponent,
    UserloginComponent,
    UserregistrationComponent,
    WelcomeComponent,
    FooterComponent,
    ApplyloanComponent,
    LoanstatusComponent,
    LoanhistoryComponent,
    LoantypesComponent,
    ManageloanComponent,
    ManageuserComponent,
    LoginComponent,
    AdminloginComponent,
    AddpropertydetailComponent,
    AddaccountdetailComponent,
    CreateLoanStatusComponent,
    LoanManageComponent,
    FileHandlingComponent,
    FileDownloadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
