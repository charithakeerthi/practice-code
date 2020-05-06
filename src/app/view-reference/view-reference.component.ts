import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-view-reference',
  templateUrl: './view-reference.component.html',
  styleUrls: ['./view-reference.component.css']
})
export class ViewReferenceComponent implements OnInit {

  @ViewChild('someContent', { static: true}) someContent: ElementRef;
  @ViewChild('paraContent', { static: true}) paraContent: ElementRef;
  
  @ViewChild('title', { static: true}) title: ElementRef;
  @ViewChild('product', { static: true}) product: ElementRef;
  
  constructor() {
    // console.log(this.someContent);
   }

  ngOnInit() {
    this.someContent.nativeElement.style.color = 'red';
    this.paraContent.nativeElement.style.color = 'violet';
    this.paraContent.nativeElement.style.fontSize = '16px';
  }

  ngAfterViewInit(){
    this.title.nativeElement.style.background = "black";
    this.title.nativeElement.style.color = "green";

    this.product.nativeElement.style.background = "red";
    this.product.nativeElement.style.color = "white";
  }


}
