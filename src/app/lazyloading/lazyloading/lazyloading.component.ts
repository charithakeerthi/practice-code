import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-lazyloading',
  templateUrl: './lazyloading.component.html',
  styleUrls: ['./lazyloading.component.css']
})
export class LazyloadingComponent implements OnInit {

  
  // regForm: FormGroup;
  // you have to chage any for formArray
  regForm: any;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.setForm();

    // new FormArray in console
    let array = new FormArray([
      new FormControl('Reddy'),
      new FormControl('reddamma@gmail.com'),
    ])
    console.log(array.value);

    array.setValue([
      'Reddamma',
      'Velasiri'
    ])
    console.log(array.value);

  }


  setForm() {
    // with multiple validations
    this.regForm = this.fb.group({
      firstName: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
      lastName: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      email: ['', Validators.required],
      // nested and dynamic formArray
      mobilenos: new FormArray([
        new FormControl()
      ])
    })
  }
  
  // for long control name we can add like this also
  get contactnos() : FormArray {
    return this.regForm.get('mobilenos') as FormArray;
  }

  // for adding mobile number button
  addMobileno(){
    // this.regForm.get('mobilenos').push(new FormControl());
    this.contactnos.push(new FormControl());
  }

  //for delete mobile number
  deleteMobileno(id: number){
    // this.regForm.get('mobilenos').removeAt(id);
    this.contactnos.removeAt(id);
  }

  regSubmit(formData) {
    console.log(formData.value);
  }

}
