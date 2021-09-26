import { Component, OnInit } from '@angular/core';
import { EmpattributeService } from "./../empattribute.service";
import {Router,ActivatedRoute} from "@angular/router";
import {Employee} from "./../employee";
import {FormBuilder, FormGroup,FormControl, Validators} from "@angular/forms";
import {first} from "rxjs/operators";


@Component({
  selector: 'app-empprofile',
  templateUrl: './empprofile.component.html',
  styleUrls: ['./empprofile.component.css']
})
export class EmpprofileComponent implements OnInit {

 
  id!: string;
  employee : Employee[] = [];
  editForm: any;
  constructor(private route :ActivatedRoute,private formBuilder: FormBuilder,private router: Router, private employeeservice: EmpattributeService) { }


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
   // let employeeId = localStorage.getItem("id");
   
    this.editForm = this.formBuilder.group({
      id: [],
      firstName:['',Validators.required],  
      lastName:['',Validators.required],
      email : ['',Validators.required],
      Designation : ['',Validators.required],
      DOJ : ['',Validators.required],
      Salary : ['',Validators.required],
      Skills : ['',Validators.required]
    });
    this.employeeservice.profilesearch(this.id)
    .subscribe( data => {
    this.employee = data;
    });

    this.employeeservice.search(this.id)
    .subscribe(data => {
      console.log(data)
      this.editForm.setValue(data);
    });
  }

  
}
