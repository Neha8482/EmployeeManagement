import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddComponent} from "./add/add.component";
import { DisplayComponent } from "./display/display.component";
import {UpdateComponent} from "./update/update.component";
import { LoginComponent } from "./login/login.component";
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { NoaccessComponent } from './noaccess/noaccess.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';
import { DetailsComponent } from './details/details.component';
import { EmployeedisplayComponent } from './employeedisplay/employeedisplay.component';
import { EmployeehomeComponent } from './employeehome/employeehome.component';
import { ProfileComponent } from './profile/profile.component';
import { EmpprofileComponent } from './empprofile/empprofile.component';
import { EditadminComponent} from './editadmin/editadmin.component'
import { Employee } from './employee';
const routes: Routes = [ 
  { path: 'add', component: AddComponent },
  { path: 'display', component: DisplayComponent },
  { path: 'edit-employee', component: UpdateComponent },
  {path : '', component : LoginComponent},
  {path : 'login', component : LoginComponent},
  { path: 'admin', component: AdminComponent },   
  { path: 'no-access', component: NoaccessComponent },
  { path: 'home', component: HomeComponent },
  { path: 'details', component: DetailsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'empdisplay', component: EmployeedisplayComponent },
  { path: 'emphome', component: EmployeehomeComponent },
  { path: 'empprofile', component: EmpprofileComponent },
  { path: 'editadmin', component: EditadminComponent }
  ];


@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
