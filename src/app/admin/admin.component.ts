import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { EmpattributeService } from "./../empattribute.service";
import {first} from "rxjs/operators";
import {Router} from "@angular/router";
import { LocalStorageService } from 'ngx-webstorage';
import { AuthserviceService } from '../authservice.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  addadminForm :any;
  

  constructor(private formBuilder: FormBuilder,private router: Router,
     private employeeservice:EmpattributeService,
     private authenticationService : AuthserviceService) { }


  ngOnInit(): void {
    this.addadminForm = this.formBuilder.group({
      id:[],
      firstName:['',Validators.required],
      lastName : ['',Validators.required],
      email : ['',Validators.required],
      Designation : ['',Validators.required],
      DOJ : ['',Validators.required],
      Salary : ['',Validators.required],
      Skills : ['',Validators.required]
    });
  
  }
  onSubmit(){
    this.authenticationService.loginadmin(this.addadminForm.value.firstName, this.addadminForm.value.lastName).then(res =>{
      console.log(this.addadminForm.value)})
    this.employeeservice.createadmin(this.addadminForm.value)
    .subscribe(data => {
      console.log(data);
      this.router.navigate(['display']);
    });
  
      
  }

}
