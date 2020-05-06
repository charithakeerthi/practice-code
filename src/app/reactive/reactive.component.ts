import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  regForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.setForm();
  }

  setForm() {
    // first method
    // this.regForm = new FormGroup({
    //   firstName : new FormControl(),
    //   lastName : new FormControl(),
    //   email : new FormControl()
    // })

    // this.regForm = this.fb.group({
    //   id: [0],
    //   firstName: ['Reddamma'],
    //   lastName: ['Velasiri'],
    //   email: ['velasirireddamma@gmail.com']
    // })

    // with validations
    // this.regForm = this.fb.group({
    //   firstName: ['', Validators.required],
    //   lastName: ['', Validators.required],
    //   email: ['', Validators.required]
    // })

    // with multiple validations
    this.regForm = this.fb.group({
      firstName: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
      lastName: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(10)])],
      email: ['', Validators.required]
    })
  }

  onSubmit(formData: FormGroup) {
    // alert("Hello");
    console.log(formData);
    console.log(formData.value);
    // this.regForm.reset();
  }

  resetForm() {
    this.regForm.reset();
  }

  // set value - In setValue we have to must give all the form values
  setValue() {
    this.regForm.setValue({
      firstName: 'Aruna Mohan',
      lastName: 'Velasiri',
      email: 'arunamohan@gmail.com'
    });
  }

  // patch value - In patchValue we dont want to give all the values in the form
  patchValue() {
    this.regForm.patchValue({
      firstName: 'Reddy',
      lastName: '',
      email: 'reddamma@gmail.com'
    });
  }

}
