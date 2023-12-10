import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './component/welcome/welcome.component';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { AdmindashboardComponent } from './component/admindashboard/admindashboard.component';
import { UserloginComponent } from './component/userlogin/userlogin.component';
import { UserdashboardComponent } from './component/userdashboard/userdashboard.component';
import { UserregistrationComponent } from './component/userregistration/userregistration.component';
import { ApplyloanComponent } from './component/applyloan/applyloan.component';
import { LoanstatusComponent } from './component/loanstatus/loanstatus.component';
import { LoanhistoryComponent } from './component/loanhistory/loanhistory.component';
import { LoantypesComponent } from './component/loantypes/loantypes.component';
import { ManageloanComponent } from './component/manageloan/manageloan.component';
import { ManageuserComponent } from './component/manageuser/manageuser.component';
import { LoginComponent } from './component/login/login.component';
import { AdminloginComponent } from './component/adminlogin/adminlogin.component';
import { LoanManageComponent } from './component/loan-manage/loan-manage.component';
import { AddaccountdetailComponent } from './component/addaccountdetail/addaccountdetail.component';
import { FileHandlingComponent } from './component/file-handling/file-handling.component';
import { FileDownloadComponent } from './component/file-download/file-download.component';

const routes: Routes = [
  {path:'',component:WelcomeComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'login',component:LoginComponent},
  {path:'userlogin',component:UserloginComponent},
  {path:'adminlogin',component:AdminloginComponent},
  { path: 'user-dashboard', component:UserdashboardComponent },
  {path:'userregister',component:UserregistrationComponent},
  {path:'admin-dashboard',component:AdmindashboardComponent},
  {path:'applyloan',component:ApplyloanComponent},
  {path:'loanstatus',component:LoanstatusComponent},
  {path:'loanhistory',component:LoanhistoryComponent},
  {path:'loantypes',component:LoantypesComponent},
  {path:'manage-loan',component:ManageloanComponent},
  {path:'manageuser',component:ManageuserComponent},
  {path:'loan-manage',component:LoanManageComponent},
  {path:"addaccountdetail", component:AddaccountdetailComponent},
  {path:"fileupload",component:FileHandlingComponent},
  {path:"filedownload",component:FileDownloadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
