import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent implements OnInit {
  name = "Reddy";
  country = "India";

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    console.log("Child: ngAfterViewInit");
  }

  ngAfterViewChecked(){
    console.log("Child: ngAfterViewChecked");
  }

  onClick(){
    this.name = "Aruna";
    this.country = "USA";
  }

}
