import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef, AfterViewChecked } from '@angular/core';
import { ViewchildChildComponent } from '../viewchild-child/viewchild-child.component';

@Component({
  selector: 'app-viewchild-parent',
  templateUrl: './viewchild-parent.component.html',
  styleUrls: ['./viewchild-parent.component.css']
})
export class ViewchildParentComponent implements OnInit, AfterViewInit, AfterViewChecked {

  @ViewChild(ViewchildChildComponent, {static: true}) viewChild: ViewchildChildComponent;

  constructor(private cdref: ChangeDetectorRef) { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    this.viewChild.name = "Aruna";
    this.viewChild.country = 'USA';
    this.cdref.detectChanges();
    console.log("Parent: ngAfterViewInit");
  }

  ngAfterViewChecked(){
    console.log("Parent: ngAfterViewChecked");
  }

  ngOnDestroy(){
    console.log("Parent: ngOnDestroy")
  }

}
