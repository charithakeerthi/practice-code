import { Component, OnInit } from '@angular/core';
import { RxjsService } from '../core/services/rxjs.service';

@Component({
  selector: 'app-interceptor',
  templateUrl: './interceptor.component.html',
  styleUrls: ['./interceptor.component.css']
})
export class InterceptorComponent implements OnInit {

  constructor(private rxjsService: RxjsService) { }

  ngOnInit() {
  }

  fetch(){
    this.rxjsService.fetch().subscribe(data => console.log(data));
  }

}
