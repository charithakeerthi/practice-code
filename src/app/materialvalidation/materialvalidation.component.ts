import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MustMatchValidators, NumericFieldValidator, Emailvalidator } from '../core/validators/validations.validators';

@Component({
  selector: 'app-materialvalidation',
  templateUrl: './materialvalidation.component.html',
  styleUrls: ['./materialvalidation.component.css']
})
export class MaterialvalidationComponent implements OnInit {
  selectedValue: string;
  submitted = false;
  // selectedCar: string;

  // foods = [
  //   {value: 'steak-0', viewValue: 'Steak'},
  //   {value: 'pizza-1', viewValue: 'Pizza'},
  //   {value: 'tacos-2', viewValue: 'Tacos'}
  // ];

  // cars = [
  //   {value: 'volvo', viewValue: 'Volvo'},
  //   {value: 'saab', viewValue: 'Saab'},
  //   {value: 'mercedes', viewValue: 'Mercedes'}

  // ];

  employeeForm: FormGroup;

  constructor(private fb: FormBuilder) { }
  ngOnInit() {
    this.setEmployeeForm();
  }
  setEmployeeForm() {
    this.employeeForm = this.fb.group({
      firstName: ['', Validators.compose([Validators.required,
      Validators.maxLength(10), Validators.minLength(3)])],
      lastName: ['', Validators.compose([Validators.required,
      Validators.maxLength(10), Validators.minLength(3)])],
      email: ['', Validators.compose([Validators.required, Emailvalidator.validEmail])],
      mobile: ['', Validators.compose([Validators.required, NumericFieldValidator.validNumericField])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      confirmPassword: ['', Validators.required],
    }, {
      validators: MustMatchValidators("password", "confirmPassword")
    });
  }
  // email
  getErrorEmail() {
    return this.employeeForm.get('email').hasError('required') ? 'Email is required' :
      this.employeeForm.get('email').hasError('validEmail') ? 'Email is Invalid' : '';
  }

  // mobile
  getMobile() {
    return this.employeeForm.get('mobile').hasError('required') ? 'Mobile Number is required' :
      this.employeeForm.get('mobile').hasError('validNumericField') ? 'Only Numbers are Allowed' : '';
  }
  // Confirm Password
  getConfirmPassword() {
    return this.employeeForm.get('confirmPassword').hasError('required') ? 'Confirm Password is required' :
      this.employeeForm.get('confirmPassword').hasError('mustMatch') ? 'Password must match' : '';
  }

  // form Submit
  onSubmit(formData: FormGroup) {
    this.submitted = true;
    console.log(formData.value);
    this.employeeForm.reset();
  }

}
