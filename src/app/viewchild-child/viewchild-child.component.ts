import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewchild-child',
  templateUrl: './viewchild-child.component.html',
  styleUrls: ['./viewchild-child.component.css']
})
export class ViewchildChildComponent implements OnInit {

  name= "Reddamma";
  country = "India";

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.name= "Mohan";
    this.country = "U.K";
  }

  ngAfterViewChecked(){
    console.log("Child: ngAfterViewChecked");
  }

  ngOnDestroy(){
    console.log("Child: ngOnDestroy")
  }

}
