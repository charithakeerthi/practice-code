import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-es6',
  templateUrl: './es6.component.html',
  styleUrls: ['./es6.component.css']
})
export class Es6Component implements OnInit {

  posts = [
    { title: "Post 1", body: "This is post one" },
    { title: "Post 2", body: "This is post two" }
  ];

  output: any = '';

  constructor() { }

  ngOnInit() {
    // this.show();
    // this.hello(20,30);
    // this.template();
    // this.hoisting();
    // default parameters
    // this.isdefault();
    // this.isdefault(30,50);
    // this.isdefault(undefined,50);
    // this.isdefault(50,undefined);

    // // rest
    // this.rp(10,20,30,40);
    // this.rp("red","green","blue");

    // // spread
    // this.sp();

    // // destructuring
    // this.ds();
    // // object dest
    // this.objectds();

    // // set
    // this.set();

    // // map
    // this.map();

    // // callback 
    // this.iscall(this.callshow);

    // promises
    this.promise();
    this.promise2();
    this.allPromises();

    // promises
    // this.getposts();
    this.init();

  }

  // show(){
  //   // function
  //   setTimeout(function() {
  //     console.log("Hello Normal Function");
  //   }, 2000);

  //   // arrow function
  //   setTimeout(() => {
  //     console.log("Hello Arrow Function");
  //   }, 2000);
  // }

  // // arrow function
  // // hello = ()=>console.log("Hello Function");

  // hello = (a,b)=>{
  //   console.log("Hello Function");
  //   console.log("Hello second line");
  //   console.log(a+b);
  // };

  // // template literals
  // template(){
  //   let name = "Reddy";
  //   console.log('Welcome to ' + name + ' for the palace');
  //   console.log(`Welcome to ${name} for the palace`);
  // }

  // // hoisting
  // hoisting(){
  //   console.log(hoist);

  //   var a = "Variables and function declarations";
  //   console.log(`What is hoisted? ${name}`);

  //   var hoist = "to lift or raise up";
  //   console.log(`Hoist Means ${hoist}`);

  // }

  // default parameters
  isdefault(x = 10, y = 20) {
    console.log(x + y);
  }

  // rest parameter
  rp(a, ...args) {
    console.log(a);
    console.log(args);
  }

  // spread parameter
  sp() {
    let a = ["red", "blue"];
    let b = ["green", ...a, 40, 50];
    console.log(a);
    console.log(b);
  }

  // destructuring
  // array destructuring
  ds() {
    let mylangs = ["js", "php", "angular", "python", "java"];
    let top1 = mylangs[0];
    let top2 = mylangs[1];
    let top3 = mylangs[2];
    console.log(top1);
    console.log(top2);
    console.log(top3);

    // es6
    let mylang = ["js", "php", "angular", "python", "java"];
    let [t1, t2, t3, t4, t5] = mylang;
    console.log(t2);
  }
  // destru for object
  objectds() {
    let biodata = {
      name: "Reddy",
      age: 27,
      deg: "B.Tech",
      hobb: {
        first: "Listning Music",
        second: "Watching Youtube"
      }
    }
    console.log(`My Name is ${biodata.name}`);
    // object destructuring
    let { name, age, deg, hobb } = biodata;
    console.log(`My Name is ${name} age is ${age} and my hobbies are ${hobb.first}, ${hobb.second}`);
  }

  // set
  set() {
    // let myarray = [10,20,30,"Reddy"];
    // let myset = new Set(myarray);
    // console.log(myarray);
    let myset = new Set();
    console.log(myset);

    myset.add(40);
    myset.add(50);
    myset.add("reddy");
    console.log(myset);

    myset.delete(50);
    console.log(myset);
  }

  // map
  map() {
    let zoo = new Map();
    zoo.set("Zebra", 5);
    zoo.set("Lions", 8);
    zoo.set("Tigers", 10);
    console.log(zoo);


    let tigercount = zoo.get('Tigers');
    console.log(tigercount);

    for (let [key, value] of zoo) {
      console.log(key + ' : ' + value);
    }
  }

  // callback
  callshow() {
    console.log("This is a function");
  }

  iscall(callback) {
    callback();
  }

  // promises
  promise() {
    let p = new Promise((resolve, reject) => {
      let a = 2;
      if (a == 2) {
        resolve("Because It is success!");
      } else {
        reject("Because It is failed!");
      }
    })

    p.then((message) => {
      console.log('This is resolved ' + message);
    }).catch((message) => {
      console.log('This is rejected ' + message);
    })
  }

  // example2
  promise2() {
    let userLeft = false;
    let userWatching = true;
    let p = new Promise((resolve, reject) => {
      if (userLeft) {
        reject({
          name: 'User Left',
          message: 'Message from User Left'
        })
      } else if (userWatching) {
        reject({
          name: 'User Watching',
          message: 'Message from user Watching'
        })
      } else {
        resolve("Success!");
      }
    })

    p.then((msg) => {
      console.log(msg);
    }).catch((error) => {
      console.log(error.name + ' ' + error.message);
    })
  }

  allPromises(){
    let one = new Promise((resolve,reject) => {
      resolve("Video 1 recorded!")
    })
    let two = new Promise((resolve,reject) => {
      resolve("Video 2 recorded!")
    })
    let three = new Promise((resolve,reject) => {
      resolve("Video 3 recorded!")
    })

    Promise.all([one,two,three]).then((msg)=>{
      console.log(msg);
    })
  }

  // getposts
  getposts(){
    this.posts.forEach((post)=>{
      this.output += `<div>${post.title}</div>`;
    })
  }

  // createpost
  createpost(post){
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        this.posts.push(post);
        let  error = false;
        if(!error){
          resolve("Success!");
        } else {
          reject("Error!");
        }
      }, 5000);
    })
  }

  async init(){
    await this.createpost({title:'Post 3', body:'This is post three'});
    this.getposts();
  }




}
