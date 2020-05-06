import { Component, OnInit } from '@angular/core';

interface address {
  houseno: number;
  streetname: string;
}

// class
class abc {
  showDetails(rollno: number, name: string) {
    // console.log(rollno + ":" + name);
  }
  name =" Reddy";
}

// enum
enum color {
  red, blue, green, violet
}

@Component({
  selector: 'app-typescript',
  templateUrl: './typescript.component.html',
  styleUrls: ['./typescript.component.css'],
  viewProviders: [abc]
})
export class TypescriptComponent implements OnInit {
  title: string = "Reddamma";
  name = "Reddy";
  age: number = 27;
  isShown: boolean = true;
  list: number[] = [10, 30, 50, 80];
  list1: Array<number> = [10, 30, 50, 80];
  stringarray: string[] = ['reddy', 'asdf', 'sdfsdf'];
  stringarray1: Array<string> = ['reddy', 'asdf', 'sdfsdf'];
  obj: object = { name: "Reddy", age: 27 };
  num: number = 100;


  // tupple
  // employee: [number, string, number, boolean] = [10, "Reddy", 10, true];
  employee: [number, string, boolean][];

  constructor(private className: abc) {
    // console.log(typeof (this.title));
    // console.log(typeof (this.name));
    // console.log(typeof (this.age));
    // console.log(typeof (this.isShown));
    // console.log(typeof (this.list));
    // console.log(typeof (this.list1));
    // console.log(typeof (this.stringarray));
    // console.log(typeof (this.stringarray1));
    // console.log(typeof (this.obj));

    // tupple
    this.employee = [[10, "Reddy", false], [18, "Aruna", true], [20, "Mohan", true]];
    // console.log(this.employee);

    // interface
    let myaddress: address = { houseno: 224, streetname: "Ashok Nagar" };
    let myaddress2: address = { houseno: 58, streetname: "TK. Street" };
    // console.log(myaddress);
    // console.log(myaddress2);

    // class
    className.showDetails(25, "Reddy");
    // console.log(className.name);

     // enum
     let mycolor: color;
     mycolor = color.green;
    //  console.log(mycolor);

    // null
    var a = null;
    console.log(a);
    console.log(typeof(a));

    // undefined
    var b;
    console.log(b);
    console.log(typeof(b));
  }

  ngOnInit() {
    this.add(50,20);
    this.varDeclaration();
    this.letDeclaration();
    // generics
    this.add(10, 20);
    let output1 = this.show<any>(100);
    console.log(output1);

    let output2 = this.show<string>("Reddy");
    console.log(output2);

    let output3 = this.show<boolean>(true);
    console.log(output3); 

    this.isShow("jhkljl");
   
  }

  // function
  add(a: number, b: number){
    // console.log(a+b);
  }

  varDeclaration() {
    var num1: number = 101;
    if (num1 > this.num) {
      var num2: number = 102;
      // console.log(num2);
    }
    // while (this.num < num1) {
    //   var num3: number = 104; 
    //   console.log(num3);
    // }
    // console.log(this.num);
    // console.log(num1);
    // console.log(num2);
    // console.log(num3);
  }

  letDeclaration() {
    let num1: number = 101;
    const number: number = 200;
    if (num1 > this.num) {
      let num1: number = 102;

      // console.log(num1);
    }
    // while (this.num < num1) {
    //   let num3: number = 104; 
    //   console.log(num3);
    // }
    // console.log(this.num);
    // console.log(num1);
    // console.log(num2);
    // console.log(num3);
  }

  // Generics
  show<T>(arg: T): T {
    return arg;
  }

  isShow(a){
    console.log(a);
  }
}
