import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { ChangecolorDirective } from '../core/directives/changecolor.directive';

@Component({
  selector: 'app-view-children',
  templateUrl: './view-children.component.html',
  styleUrls: ['./view-children.component.css']
})
export class ViewChildrenComponent implements OnInit {
  @ViewChildren(ChangecolorDirective) colorDir: QueryList<ChangecolorDirective>;

  constructor() { }

  ngOnInit() {
  }

  setColor(val: string) {
    this.colorDir.forEach(e => {
      e.changeColor(val);
    })
  }


}
