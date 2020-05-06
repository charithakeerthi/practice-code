import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../core/services/myservice.service';

@Component({
  selector: 'app-myservice',
  templateUrl: './myservice.component.html',
  styleUrls: ['./myservice.component.css']
})
export class MyserviceComponent implements OnInit {
  msg = '';
  allnum: number[] = [];


  constructor(private myService: MyserviceService) { }

  ngOnInit() {
    this.msg = this.myService.getText();
    console.log(this.msg);
    this.getData();
  }

  callService() {
    this.msg = this.myService.getText2();
  }
  callOtherService() {
    this.msg = this.myService.getOther();
  }

  // list
  addNumber(data: number) {
    this.myService.addNum(data);
    this.getData();
  }

  getData() {
    this.allnum = this.myService.getList();
    console.log(this.allnum);
  }

}
