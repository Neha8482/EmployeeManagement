import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { EmpattributeService } from "./../empattribute.service";
import {first} from "rxjs/operators";
import {ActivatedRoute, Router} from "@angular/router";
import { LocalStorageService } from 'ngx-webstorage';
import { AuthserviceService } from '../authservice.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})


export class AddComponent implements OnInit {

  addForm = this.formBuilder.group({
    id:[],
    firstName:['',Validators.required],
    lastName : ['',Validators.required],
    email : ['',Validators.required],
    Designation : ['',Validators.required],
    DOJ : ['',Validators.required],
    Salary : ['',Validators.required],
    Skills : ['',Validators.required]
  });
  id!: string;

  constructor(private route :ActivatedRoute,private formBuilder: FormBuilder,private router: Router,
     private employeeservice:EmpattributeService,
     private authenticationService : AuthserviceService) { }


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.addForm = this.formBuilder.group({
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
    this.authenticationService.login(this.addForm.value.email, this.addForm.value.id).then(res =>{
      console.log(this.addForm.value)})
    this.employeeservice.create(this.addForm.value)
    .subscribe(data => {
      console.log(data);
      this.router.navigate(['display',{id:this.id}]);
    });
  
      
  }

}
