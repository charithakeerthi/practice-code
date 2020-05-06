import { Component, OnInit } from '@angular/core';
import { RxjsService } from 'src/app/core/services/rxjs.service';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component implements OnInit {

  empName: any;
  constructor(private myService: RxjsService) {
    this.myService.userName.subscribe(name => {
      this.empName = name
    });
  }

  updateEmployeeName(name: any) {
    this.myService.userName.next(name);
  }

  ngOnInit() {
  }

}
