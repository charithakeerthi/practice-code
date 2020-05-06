import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef, AfterViewChecked } from '@angular/core';
import { ViewChildComponent } from '../view-child/view-child.component';

@Component({
  selector: 'app-view-parent',
  templateUrl: './view-parent.component.html',
  styleUrls: ['./view-parent.component.css']
})
export class ViewParentComponent implements OnInit, AfterViewInit, AfterViewChecked {
  @ViewChild(ViewChildComponent, {static: true}) viewChild: ViewChildComponent;
  country: any;
  constructor(private cdref: ChangeDetectorRef) { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    console.log("Parent: ngAfterViewInit");
    this.viewChild.name = "Reddamma";
    this.viewChild.country = "Hindusthan";
    this.cdref.detectChanges();
    console.log(this.viewChild.name);
  }
  
  ngAfterViewChecked(){
    console.log("Parent: ngAfterViewChecked");
  }

}
