import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  mytitle :any;
  mycountry: any;
  
  constructor() { }

  ngOnInit() {
    this.mytitle = "Reddy";
    this.mycountry = "India";
  }

  onclick(){
    this.mytitle = "Aruna";
    this.mycountry = "Hindusthan";
  }

  ngAfterContentChecked(){
    console.log("child: ngAfterContententChecked");
  }

}
