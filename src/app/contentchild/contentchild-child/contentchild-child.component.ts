import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contentchild-child',
  templateUrl: './contentchild-child.component.html',
  styleUrls: ['./contentchild-child.component.css']
})
export class ContentchildChildComponent implements OnInit {
  name: string;
  country: string;
  constructor() { }

  ngOnInit() {
    this.name = "Reddy";
    this.country = "India";
  }

  onClick(){
    this.name = "Mohan";
    this.country = "U.K";
  }

  ngDoCheck(){
    console.log("Child: ngDoCheck Called");
  }

  ngAfterContentChecked(){
    console.log("Child: ngAfterContentChecked Called");
  }



}
