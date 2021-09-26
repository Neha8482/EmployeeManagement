import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import {MatIconModule} from '@angular/material/icon';
import {  ViewChild } from "@angular/core";
import { Slide } from "../carousel/carousel.inteface";
import { AnimationType } from "../carousel/carousel.animations";
import { CarouselComponent } from "../carousel/carousel.component";
import jsondata from '../data.json'

@Component({
  selector: 'app-employeehome',
  templateUrl: './employeehome.component.html',
  styleUrls: ['./employeehome.component.css','./employeehome.component.scss']
})
export class EmployeehomeComponent implements OnInit {

 
  username: string="";
  showFiller = false;
  type:any;

 id!: string;
  email!: string;
  
  //public currentUser;
  constructor(private localstorageservice: LocalStorageService,private router:Router,
    private route :ActivatedRoute) {}
//  this.currentUser = localStorage.getItem('currentUser')? JSON.parse(localStorage.getItem('currentUser')) : '';
  //this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
  

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
  //  this.username = this.localstorageservice.retrieve('currentUser').email;
   // console.log(this.username);
  }
  @ViewChild(CarouselComponent)
  carousel: CarouselComponent = new CarouselComponent;

  animationType = AnimationType.Scale;

  animationTypes = [
    {
      name: "Scale",
      value: AnimationType.Scale
    },
    {
      name: "Fade",
      value: AnimationType.Fade
    },
    {
      name: "Flip",
      value: AnimationType.Flip
    },
    {
      name: "Jack In The Box",
      value: AnimationType.JackInTheBox
    }
  ];
  slides: Slide[] = [
    {
      headline: "For Your Current Mood",
      src:
        "https://www.workdesign.com/wp-content/uploads/2018/10/Chamberlain-Headquarters.jpg"
    },
    {
      headline: "Miouw",
      src:
        "https://www.workdesign.com/wp-content/uploads/2018/10/District-Wharf-1_SmithGroup.jpg"
    },
    {
      headline: "In The Wilderness",
      src:
        "https://www.workdesign.com/wp-content/uploads/2018/10/ExelonBaltimoreHeadquarters_SmithGroup.jpg"
    },
    {
      headline: "Focus On The Writing",
      src:
        "https://www.workdesign.com/wp-content/uploads/2018/10/District-Wharf-3_SmithGroup.jpg"
    }
  ];

  setAnimationType(type:any) {
    this.animationType = type.value;
    setTimeout(() => {
      this.carousel.onNextClick();
    });
  }
  profile():void{
    this.router.navigate(['empprofile',{id:this.id}]);
  }
  addemployee(): void {
      
    this.router.navigate(['add']);
    }
    searchforemployee(): void {
      
      this.router.navigate(['empdisplay']);
      }
    addadmin(): void {
      
      this.router.navigate(['admin']);
      }

  logout(){
   this. localstorageservice.clear('currentUser');
    this.router.navigate(['login'])
  }
}

