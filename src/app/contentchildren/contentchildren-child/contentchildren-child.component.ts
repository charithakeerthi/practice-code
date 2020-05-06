import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contentchildren-child',
  templateUrl: './contentchildren-child.component.html',
  styleUrls: ['./contentchildren-child.component.css']
})
export class ContentchildrenChildComponent implements OnInit {

  @Input() name : string;
  message: string = "";
  count: number = 0;

  mymsg : string = "Hello Reddy";

  constructor() { }

  ngOnInit() {
  }

  increasebyOne() {
    this.count ++;
    this.message = " Counter :" + this.count;
  }

  decreasebtOne() {
    this.count = this.count - 1;
    this.message = " Counter :" + this.count;
  }
}
