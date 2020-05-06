import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee';

const headerOption = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url: string = 'http://localhost:3000/Employees';

  constructor(private http: HttpClient) { }

  getEmployees() {
    return this.http.get(this.url);
  }

  // getAll Employees
  getAllEmployee(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.url);
  }

  // post Employee
  createEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.url, employee, headerOption);
  }

  // update Employee
  updateEmployee(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(this.url + '/' + employee.id, employee, headerOption);
  }

  // delete Employee
  deleteEmployee(id: Number): Observable<Employee> {
    return this.http.delete<Employee>(this.url + '/' + id, headerOption);
  }

  // getEmployeeById
  getEmployeeById(employeeId: string): Observable<Employee> {
    return this.http.get<Employee>(this.url + '/' + employeeId)
  }

   // Single employee  
   getEmployee(employeeId: string): Observable<Employee>{
    return this.http.get<Employee>(this.url + '/' + employeeId);
  }
}
