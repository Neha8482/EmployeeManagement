import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
//import 'rxjs/add/operator/toPromise'
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

//  private currentUserSubject: BehaviorSubject<User>;
  //public currentUser: Observable<User>;

  constructor(private http: HttpClient) {}
 //   this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
  // this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    //  this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser') || '{}'));
      //this.currentUser = this.currentUserSubject.asObservable();
  
/*
  public get currentUserValue(): User {
      return this.currentUserSubject.value;
    }
*/



  login(email: string, password: string) {
      return this.http.post<any>(`http://localhost:3000/login`, { "email":email,"password": password })
         .toPromise()
         .then(function(res){
           return res
         })
         .catch((error) =>{
           console.log(error)
         })
  }
  
  loginadmin(email: string, password: string) {
    return this.http.post<any>(`http://localhost:3000/loginadmin`, { "email":email,"password": password })
       .toPromise()
       .then(function(res){
         return res
       })
       .catch((error) =>{
         console.log(error)
       })
}

  logout() {
      // remove user data from local storage for log out
      localStorage.removeItem('currentUser');
    //  this.currentUserSubject.next(null);
  }
}
