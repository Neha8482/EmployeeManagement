import { Component, OnInit } from '@angular/core';
import { EmpattributeService } from "./../empattribute.service";
import {Router,ActivatedRoute} from "@angular/router";
import {Employee} from "./../employee";
import {FormBuilder, FormGroup,FormControl, Validators} from "@angular/forms";
import {first} from "rxjs/operators";


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {



  constructor(private route :ActivatedRoute,private formBuilder: FormBuilder,private router: Router, private employeeservice: EmpattributeService) { }

    id!: string;
  employee: any;
  editForm:any;

  ngOnInit(): void {}}/*
    this.employee = new Employee();
    this.id = this.route.snapshot.params['id'];

     
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
    this.employeeservice.search(this.id)
    .subscribe(data => {
      this.editForm.setValue(data);
    });  
  
  }
  onSubmit(){
    this.router.navigate(['display']);
  }

  list(){
    this.router.navigate(['display']);
  }
  

}
*/