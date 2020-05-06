import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-templatedriven',
  templateUrl: './templatedriven.component.html',
  styleUrls: ['./templatedriven.component.css']
})
export class TemplatedrivenComponent implements OnInit {

  formValues: any;
  constructor() { }

  ngOnInit() {
  }

  onSubmit(formData: NgForm){
    // alert("Hello");
    console.log(formData);    
    console.log(formData.value);  
    this.formValues = formData.value;
  }

}
