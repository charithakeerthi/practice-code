import { Component, OnInit, ContentChild, AfterContentInit, ElementRef, AfterContentChecked } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, AfterContentInit, AfterContentChecked {
  @ContentChild(ChildComponent, {static: true}) contentChild;
  // @ContentChild('title') title: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(){
    this.contentChild.mytitle = "Reddammsdfsdfa";
    this.contentChild.mycountry = "Bsdfsdfharath";
    console.log("parent: ngAfterContentInit");
  }

  ngAfterContentChecked(){
    console.log("parent: ngAfterContententChecked");
  }


}
