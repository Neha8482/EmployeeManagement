import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmpattributeService {
//  private url = 'http://localhost:4200/data';
  //private url = 'https://dummy.restapiexample.com/api/v1/employees';
  private url = 'http://localhost:3000/data';
  private adminurl = 'http://localhost:3000/admindata'

  constructor(private http:HttpClient) {
  }

  search(id:string) {
    return this.http.get<Employee[]>(`${this.url}/${id}`);
  }
  
  
  profilesearch(id:string) {
    return this.http.get<Employee[]>(`${this.adminurl}/${id}`);
  }
  
  create(employee:Employee) {
    return this.http.post(`${this.url}`,employee);
  }
  createadmin(employee:Employee) {
    return this.http.post(`${this.adminurl}`,employee);
  }
  update(data:Employee) {
    return this.http.put<Employee[]>(this.url+'/'+data.id,data);
  }
  updateadmin(data:Employee) {
    return this.http.put<Employee[]>(this.adminurl+'/'+data.id,data);
  }
  display(){
    return this.http.get<Employee[]>(`${this.url}`);
  }
  delete(id:string) {
    return this.http.delete<Employee[]>(`${this.url}/${id}`);
  }


}
