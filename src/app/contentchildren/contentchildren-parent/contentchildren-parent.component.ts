import { Component, OnInit, ContentChildren, QueryList } from '@angular/core';
import { ContentchildrenChildComponent } from '../contentchildren-child/contentchildren-child.component';

@Component({
  selector: 'app-contentchildren-parent',
  templateUrl: './contentchildren-parent.component.html',
  styleUrls: ['./contentchildren-parent.component.css']
})
export class ContentchildrenParentComponent implements OnInit {

  
  @ContentChildren(ContentchildrenChildComponent) counterComponents: QueryList<ContentchildrenChildComponent>;


  msg: any;
 

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    let length = this.counterComponents.length;
  }

  Increase() {
    this.counterComponents.forEach(element => element.increasebyOne());
  }

  Decrease() {
    this.counterComponents.forEach(element => element.decreasebtOne());
  }


}
