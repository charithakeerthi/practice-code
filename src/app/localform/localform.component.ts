import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Emailvalidator, NumericFieldValidator, MustMatchValidators } from '../core/validators/validations.validators';
import { DialogService } from '../core/services/dialog.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-localform',
  templateUrl: './localform.component.html',
  styleUrls: ['./localform.component.css']
  
})
export class LocalformComponent implements OnInit {

  employeeForm: FormGroup;
  submitted = false;
  formusers: any = [];
  formValues: [];
  isUpdating = false;

  constructor(private fb: FormBuilder, public dialogService: DialogService) { }

  ngOnInit() {
    this.setEmployeeForm();
    this.getData();
  }

  setEmployeeForm() {
    this.employeeForm = this.fb.group({
      firstName: ['', Validators.compose([Validators.required, Validators.maxLength(10), Validators.minLength(3)])],
      lastName: ['', Validators.compose([Validators.required, Validators.maxLength(10), Validators.minLength(3)])],
      mobile: ['', Validators.compose([Validators.required, NumericFieldValidator.validNumericField])]
    });
  }
  // convenience getter for easy access to form fields
  get f() { return this.employeeForm.controls; }

  // form Submit
  onSubmit(formData: FormGroup) {
    this.isUpdating = true;
    this.submitted = true;
    console.log(formData.value);

    this.formusers.push(formData.value);
    localStorage.setItem('formusers', JSON.stringify(this.formusers));
    this.getData();
    this.employeeForm.reset();
  }

  getData() {
    this.formValues = JSON.parse(localStorage.getItem('formusers'));
  }

  canDeactivate(): Observable<boolean> | boolean {

    if (!this.isUpdating && this.employeeForm.dirty) {
      return this.dialogService.confirm('Are you sure to leave the discard changes?');
    }
    return true;
  }


}

