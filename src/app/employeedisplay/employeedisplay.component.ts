import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './../employee';
import { EmpattributeService } from "./../empattribute.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-employeedisplay',
  templateUrl: './employeedisplay.component.html',
  styleUrls: ['./employeedisplay.component.css']
})
export class EmployeedisplayComponent implements OnInit {


  employees: Employee[] = [];
  searchText!: string;
  search: any;
  selectvalue!: string;
  selectv=false;
  headers = ["firstName","lastName","email"]


  constructor(private router: Router,private employeeService : EmpattributeService) { 
  
  }

  ngOnInit(): void {
    this.employeeService.display()
    .subscribe( data => {
    this.employees = data;
    });
  }
  

  reloadData() {
    this.employeeService.display()
    .subscribe( data => {
    this.employees = data;
    });
  }
  selectChangeHandler (event: any) {
    //update the ui
    this.selectvalue = event.target.value;
    if(this.selectvalue=="DOJ"){
      this.selectv=true;
    }
  }

    employeeDetails(id: number){
      this.router.navigate(['details', {id:id}]);
    }
    
    }


