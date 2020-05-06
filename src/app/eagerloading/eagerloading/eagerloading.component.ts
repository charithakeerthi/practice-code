import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-eagerloading',
  templateUrl: './eagerloading.component.html',
  styleUrls: ['./eagerloading.component.css']
})
export class EagerloadingComponent implements OnInit {

  
  regForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.setForm();
  }

  setForm() {
    // with multiple validations
    this.regForm = this.fb.group({
      firstName: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      address: new FormGroup({
        houseNo: new FormControl('', Validators.compose([Validators.required, Validators.minLength(5)])),
        city: new FormControl('', Validators.required),
        country: new FormControl('India', Validators.required),
        // country: new FormControl({ value: "India", disabled: true }, Validators.required),
      })
    });
  }

  regSubmit(formData: FormGroup) {
    console.log(formData.value);
    this.regForm.reset();
  }



}
