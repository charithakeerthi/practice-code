import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-data-child',
  templateUrl: './data-child.component.html',
  styleUrls: ['./data-child.component.css']
})
export class DataChildComponent implements OnInit {
  @Input() pData: string;
  constructor() {
    console.log("Child Component: Constructor Called!");
  }

  // ngOnChanges(changes) {
  //   console.log("Child Component: ngOnChanges Called!");
  //   for (let item in changes) {
  //     let chng = changes[item];
  //     let cur = chng.currentValue;
  //     let prev = chng.previousValue;
  //     console.log(item + ' : Current Value: ' + cur + ' Previous Value: ' + prev);

  //   }
  // }

  ngOnInit() {
    console.log("Child Component: ngOnInit Called!");
  }

  // ngDoCheck(){
  //   console.log("Child Component: ngDoCheck Called!");
  // }

}
