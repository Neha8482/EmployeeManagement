import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  NgxWebstorageModule } from "ngx-webstorage";
import { GrdFilterPipe } from './grd-filter.pipe'

import { MatSidenavModule } from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';

// services
import { IncepterService } from './incepter.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { SearchComponent } from './search/search.component';
import { UpdateComponent } from './update/update.component';
import { DisplayComponent } from './display/display.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import {RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { NoaccessComponent } from './noaccess/noaccess.component'
import { AuthserviceService } from './authservice.service';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { DetailsComponent } from './details/details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselComponent } from './carousel/carousel.component';
import { EmployeedisplayComponent } from './employeedisplay/employeedisplay.component';
import { EmployeehomeComponent } from './employeehome/employeehome.component';
import { EmpprofileComponent } from './empprofile/empprofile.component';
import { EditadminComponent } from './editadmin/editadmin.component';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    SearchComponent,
    UpdateComponent,
    DisplayComponent,
    LoginComponent,
    AdminComponent,
    NoaccessComponent,
    HomeComponent,
    ProfileComponent,
    DetailsComponent,
    GrdFilterPipe,
    CarouselComponent,
    EmployeedisplayComponent,
    EmployeehomeComponent,
    EmpprofileComponent,
    EditadminComponent
  ],
  imports: [
    FormsModule,
   MatSidenavModule,
   MatCardModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule, NgxWebstorageModule.forRoot(), BrowserAnimationsModule,
     // required animations module
  ],
  providers: [ 
    AuthserviceService
    // For creating a mock back-end. You don't need these in a real app.   
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
