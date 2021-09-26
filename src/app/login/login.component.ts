import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../authservice.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';

import { LocalStorageService } from 'ngx-webstorage'
import jsondata from '../data.json'
//https://www.w3schools.com/howto/howto_css_switch.asp
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[AuthserviceService]
})
export class LoginComponent implements OnInit {

//  loginForm: any;
  //adminloginForm:any;

  logi=jsondata.login;
  admindata=jsondata.loginadmin;


  formvalue:any;
  loading = false;
  submitted = false;
  submitted2 = false;
  showModal: boolean=false;
  showModal2: boolean=false;
  x:any;
  returnUrl:string= "";
  user=false;

  loginForm = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
    });
  adminloginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
      });
   
  constructor(
  private formBuilder: FormBuilder,
  private route: ActivatedRoute,
  private router: Router,
  private localstorageservice : LocalStorageService,
  private authenticationService : AuthserviceService
  ) { }
 
  show()
  {
    this.showModal = true; // Show-Hide Modal Check
    
  }
  //Bootstrap Modal Close event
  hide()
  {
    this.showModal = false;
  }

  show2()
  {
    this.showModal2 = true; // Show-Hide Modal Check
    
  }
  //Bootstrap Modal Close event
  hide2()
  {
    this.showModal2 = false;
  }

  


  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
      });
      this.adminloginForm = this.formBuilder.group({
        email: ['', Validators.required],
        password: ['', Validators.required]
        });
  }

  get f() { return this.loginForm.controls; }
 
onemployeeSubmit() {
this.formvalue=this.loginForm.value;
var x;

//this.loading = true;
this.submitted = true;
for(var i = 0; i < this.logi.length; i++) {
  x=this.logi[i]
  console.log(x.email)
  if ((x.email === this.loginForm.value.email && x.password === this.loginForm.value.password)){
    this.user=true;
    console.log(this.user)
    break;
  }
}
//const user = login.forEach(function(x){
if(this.user){
 this. localstorageservice.store('currentUser',this.formvalue);
  console.log(this.user)
 this.router.navigate(['emphome',{id:this.formvalue.password}])
}else{
 
 alert('Username or password is incorrect')
return
}
if(this.submitted)
{
  this.showModal = false;
}
}

onadminSubmit() {
  this.formvalue=this.adminloginForm.value;
  var x;
  
  this.loading = true;
  this.submitted2 = true;
  for(var i = 0; i < this.admindata.length; i++) {
    x=this.admindata[i]
    console.log(x.email)
    if ((x.email === this.adminloginForm.value.email && x.password === this.adminloginForm.value.password)){
      this.user=true;
      console.log(this.user)
      break;
    }
  }
  //const user = login.forEach(function(x){
  if(this.user){
   this. localstorageservice.store('currentUser',this.formvalue);
    console.log(this.user)
   this.router.navigate(['home',{id:this.formvalue.password}])
  }else{
   
   alert('Username or password is incorrect')
  return
  }
  if(this.submitted2)
  {
    this.showModal2 = false;
  }
  }
  
}
