import { Component, OnInit } from '@angular/core';
import { ApiService } from '../core/services/api.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Employee } from '../core/model/employee';

@Component({
  selector: 'app-singlepagecrud',
  templateUrl: './singlepagecrud.component.html',
  styleUrls: ['./singlepagecrud.component.css']
})
export class SinglepagecrudComponent implements OnInit {
  employeeForm: FormGroup;
  submitted = false;
  allEmployees: any;
  message = 'SAVE';
  employeeIdToUpdate = null;

  constructor(private fb: FormBuilder, private apiService: ApiService) { }

  ngOnInit() {
    this.setEmployeeForm();
    this.getAllEmployees();
  }

  setEmployeeForm() {
    // dboperation
    // this.dbops = Dboperation.create;

    this.employeeForm = this.fb.group({
      firstName: ['', Validators.compose([Validators.required,
      Validators.maxLength(10), Validators.minLength(3)])],
      lastName: ['', Validators.compose([Validators.required,
      Validators.maxLength(10), Validators.minLength(3)])],
      employeeCode: ['', Validators.required],
      address: ['', Validators.required],
      contactNumber: ['', Validators.required],
    });
    this.getAllEmployees();
  }

  // getAll Employees
  getAllEmployees() {
    this.apiService.getAllEmployee().subscribe(
      (data) => {
        this.allEmployees = data;
        console.log(this.allEmployees);
      }
    )
  }

  // form Submit
  onSubmit() {
    this.submitted = true;
    console.log("hello");
    if (this.employeeForm.invalid) {
      return;
    } else {
      this.submitted = false;
      let employee = this.employeeForm.value;
      this.createEmployee(employee);
      this.employeeForm.reset();
    }
  }

  // createEmployee
  createEmployee(employee: Employee) {
    if (this.employeeIdToUpdate == null) {
      this.apiService.createEmployee(employee).subscribe(
        () => {
          this.submitted = true;
          this.getAllEmployees();
          this.employeeIdToUpdate = null;
          this.resetForm();
        }
      )
    } else {
      employee.id = this.employeeIdToUpdate;
      this.apiService.updateEmployee(employee).subscribe(
        () => {
          this.submitted = true;
          this.getAllEmployees();
          this.employeeIdToUpdate = null;
          this.resetForm();
        }
      )
    }
  }

  // editemployee
  editEmployee(employeeId: string) {
    this.apiService.getEmployeeById(employeeId).subscribe(employee => {
      this.message = 'UPDATE';
      this.submitted = false;
      this.employeeIdToUpdate = employee.id;
      this.employeeForm.controls['firstName'].setValue(employee.firstName);
      this.employeeForm.controls['lastName'].setValue(employee.lastName);
      this.employeeForm.controls['employeeCode'].setValue(employee.employeeCode);
      this.employeeForm.controls['address'].setValue(employee.address);
      this.employeeForm.controls['contactNumber'].setValue(employee.contactNumber);
    })
  }

   // delete Employee
   deleteEmployee(id: number) {
    this.apiService.deleteEmployee(id).subscribe(
      (data) => {
        this.getAllEmployees();
      });
  }

  resetForm() {
    this.employeeForm.reset();
    this.message = 'SAVE';
    this.submitted = false;
  }

}
