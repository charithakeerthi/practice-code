import { Component, OnInit, ContentChild, AfterContentInit, AfterContentChecked } from '@angular/core';
import { ContentchildChildComponent } from '../contentchild-child/contentchild-child.component';

@Component({
  selector: 'app-contentchild-parent',
  templateUrl: './contentchild-parent.component.html',
  styleUrls: ['./contentchild-parent.component.css']
})
export class ContentchildParentComponent implements OnInit, AfterContentInit, AfterContentChecked {
  @ContentChild(ContentchildChildComponent, {static: true}) contentChild;

  constructor() { }

  ngOnInit() {
    // this.contentChild.name = 'Aruna';
    // this.contentChild.country = 'USA';
  }

  ngAfterContentInit(){
    console.log("Parent: ngAfterContentInit Called");
    this.contentChild.name = 'Reddamma';
    this.contentChild.country = 'Bharath';
  }

  ngDoCheck(){
    console.log("Parent: ngDoCheck Called");
  }

  ngAfterContentChecked(){
    console.log("Parent: ngAfterContentChecked Called");
  }

}
