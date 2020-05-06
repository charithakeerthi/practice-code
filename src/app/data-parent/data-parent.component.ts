import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-parent',
  templateUrl: './data-parent.component.html',
  styleUrls: ['./data-parent.component.css']
})
export class DataParentComponent implements OnInit {

  constructor() {
    console.log("Parent Component: Constructor Called!");
  }

  // ngOnChanges() {
  //   console.log("Parent Component: ngOnChanges Called!");
  // }

  ngOnInit() {
    console.log("Parent Component: ngOnInit Called!");
  }

  // ngDoCheck(){
  //   console.log("Parent Component: ngDoCheck Called!");
  // }

}
