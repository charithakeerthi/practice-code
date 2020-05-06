import { Component, OnInit } from '@angular/core';
import { RxjsService } from '../core/services/rxjs.service';
import { interval, Observable, of, from, pipe, concat } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {
  person: any = {
    name: 'Reddy'
  }

  empName: any;
  age: any;

  constructor(private rxjsService: RxjsService) {
    this.rxjsService.userName.subscribe(data => {
      this.empName = data;
      console.log(this.empName);
    })

    // age
    this.rxjsService.age.subscribe(data => {
      this.age = data;
      console.log(this.empName);
    })
   }

  ngOnInit() {
    // this.listenRadio();
    // of 
    this.of();
    this.from();
    this.map();
    this.filter();
    this.concat();
  }

  // observable
  listenRadio() {
    this.rxjsService.listenRadio().subscribe(data => {
      console.log(data);
    })
  }

  // of 
  of() {
    // let person: Observable<any> = of(this.person);
    let person: Observable<any> = of(123);
    person.subscribe(data => console.log(data))
  }

  // from 
  from() {
    const arraySource = from([1, 2, 3, 4, 5]);
    arraySource.subscribe(val => console.log(val));



    const personPromise: Promise<any> = Promise.resolve(this.person);
    // const personFrom: Observable<any> = of(personPromise);
    const personFrom: Observable<any> = from(personPromise);
    personFrom.subscribe(data => console.log(data));
  }

  // map
  map() {
    let allnumbers = from([1, 2, 3, 4, 5]);

    allnumbers
      .pipe(map(val => val + 10))
      .subscribe(data => console.log(data));

    // ex 2
    const source = from([
      { name: 'Joe', age: 30 },
      { name: 'Frank', age: 20 },
      { name: 'Ryan', age: 50 }
    ]);

    source
      .pipe(map(({ name, age }) => 'Welcome' + ' ' + name + ' your age is ' + age))
      .subscribe(data => console.log(data))
  }

  // filter
  filter() {
    const source = from([1, 2, 3, 4, 5]);
    //filter out non-even numbers
    source.pipe(filter(num => num % 2 === 0))
      .subscribe(data => console.log("Filter " + data));
    // ex 2
    const employees = from([
      { name: 'Joe', age: 31 },
      { name: 'Bob', age: 25 }
    ]);
    //filter out people with age under 30
    employees.pipe(filter(person => person.age < 30))
      .subscribe(data => console.log(data.name));
  }

  // concat
  concat() {
    concat(
      of(1, 2, 3),
      // subscribed after first completes
      of(4, 5, 6),
      // subscribed after second completes
      of(7, 8, 9)
    )
      .subscribe(data => console.log("concat " + data))
  }


}
