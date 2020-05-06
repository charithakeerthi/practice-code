import { Injectable } from '@angular/core';
import { Observable, interval, Subject, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RxjsService {
  
  // userName = new Subject();
  userName = new BehaviorSubject('Charitha');
  age = new BehaviorSubject(20);

  constructor(private http: HttpClient) { }

  listenRadio(): Observable<any> {
    return interval(1000);
  }

  fetch(){
    return this.http.get("https://jsonplaceholder.typicode.com/todos/1");
  }
}
