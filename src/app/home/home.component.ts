import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../core/services/myservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // userName= 'Reddamma';
  // getuser: any;
  myUsers: any;
  msg ='';
  

  users = ["red", "blue", "green"];

  constructor(private myService: MyserviceService) { 
    // localStorage.setItem('user', this.userName); 
    // // sessionStorage.setItem('user11', this.userName); 
    // localStorage.setItem('users', JSON.stringify(this.users));
  }

  ngOnInit() {
    this.msg = this.myService.getText();
    console.log(this.msg);
    this.getUsers();
  }

  // getData(){
  //   // this.getuser = localStorage.getItem('user'); 
  //   // console.log(this.getuser);
  //   this.myUsers = JSON.parse(localStorage.getItem('users'))
  // }

  // clearData(){
  //   localStorage.removeItem('user'); 
  // }


  addUser(val: any) {
    this.users.push(val);
    localStorage.setItem('users', JSON.stringify(this.users));
    console.log("users", this.users);
    this.getUsers();
  }

  removeitem(val: any){
    this.users.slice(0,1);
    this.getUsers();
    // localStorage.removeItem('users'); 
  }

  getUsers() {
    // return this.users;
    this.myUsers = JSON.parse(localStorage.getItem('users'));
  }

}
