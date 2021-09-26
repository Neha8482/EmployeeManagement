import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './../employee';
import { EmpattributeService } from "./../empattribute.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  employees: Employee[] = [];
  searchText!: string;
  search: any;
  headers = ["firstName","lastName","email"]

  id!: string;
  selectvalue!: string;
  selectv=false;

  constructor(private route : ActivatedRoute,private router: Router,private employeeService : EmpattributeService) { 
  
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.employeeService.display()
    .subscribe( data => {
    this.employees = data;
    });
    
  }
  
  selectChangeHandler (event: any) {
    //update the ui
    this.selectvalue = event.target.value;
    if(this.selectvalue=="DOJ"){
      this.selectv=true
    }
  }

  reloadData() {
    this.employeeService.display()
    .subscribe( data => {
    this.employees = data;
    });
  }
  takehome(){
    this.router.navigate(['home',{id:this.id}]);
  }

  deleteemployee(id: string) {
    this.employeeService.delete(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
  editemployee(id:string): void {
    localStorage.removeItem("editemployeeId");
    localStorage.setItem("editemployeeId", id.toString());
    this.router.navigate(['edit-employee',{id:id}]);
    };
    
    addemployee(): void {
      
    this.router.navigate(['add']);
    }
    addadmin(): void {
      
      this.router.navigate(['admin']);
      }
    employeeDetails(id: string){
      localStorage.setItem("editemployeeId", id.toString());
      this.router.navigate(['details', {id:id}]);
    }
    
    }


