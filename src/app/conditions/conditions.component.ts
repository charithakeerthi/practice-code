import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conditions',
  templateUrl: './conditions.component.html',
  styleUrls: ['./conditions.component.css']
})
export class ConditionsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // if example
    if (true) { console.log('This will always executed.'); }
    if (false) { console.log('This will never executed.'); }

    //  if and else
    let a = 5;
    if (a < 2) {
      console.log("This value matches");
    } else {
      console.log("This value not matches");
    }

    let x = 10, y = 20;
    // terinary 
    x > y ? console.log('X is Greater than Y') : console.log('X is Less than Y');

    // if and else if
    var num: number = 0;
    if (num > 0) {
      console.log(num + " is positive")
    } else if (num < 0) {
      console.log(num + " is negative")
    } else {
      console.log(num + " is neither positive nor negative")
    }

    //  switch
    let Day = 114;

    switch (Day) {
      case 0:
        console.log("Sunday");
        break;
      case 1:
        console.log("Monday");
        break;
      case 2:
        console.log("Tuesday");
        break;
      case 3:
        console.log("Wednessday");
        break;
      case 4:
        console.log("Thursday");
        break;
      case 5:
        console.log("Friday");
        break;
      case 6:
        console.log("Saturday");
        break;

      default:
        console.log("Match Not Found");
        break;
    }

    // for loop
    for (let i = 0; i < 5; i++) {
      console.log(i);
    }

    for (let a = 5; a > 0; a--) {
      console.log(a);
    }

    let array = [10, 20, 30, 40, 50];
    for (let x = 0; x < array.length; x++) {
      console.log(array[x]);
    }

    // for in
    for (let item in array) {
      console.log(array[item]);
    }

    // for of
    for (let item of array) {
      console.log(item);
    }

    // foreach
    array.forEach(element => {
      console.log(element);
    });

    // while loop
    let i: number = 0;
    let arr = [10, 20, 30];
    // while(i<4){
    //   console.log("Value is: " + i);
    //   i++;
    // }

    while (i < arr.length) {
      console.log('value is a: ' + array[i]);
      i++;
    }

    // dowhile
    this.DoWhileExample();

  }

  switchCase() {
    // switch
    let mynumber = 4;
    switch (mynumber) {
      case 0:
        console.log(0);
        break;
      case 1:
        console.log(1);
        break;
      case 2:
        console.log(2);
        break;
      case 3:
        console.log(3);
        break;
      case 4:
        console.log(4);
        break;

      default:
        console.log("Match not found");
        break;
    }
  }

  // dowhile
  DoWhileExample() {
    let i: number = 0;

    do {
      console.log("Dowhile value is " + i);
      i++;
    } while (i < 4)
  }




}
