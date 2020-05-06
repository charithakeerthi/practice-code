import { Component, OnInit } from '@angular/core';
import { ApiService } from '../core/services/api.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees: any;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getAllEmployees();
  }

  getAllEmployees(){
    this.apiService.getEmployees().subscribe(data => {
      this.employees = data;
      console.log(this.employees);
    });
  }

}
