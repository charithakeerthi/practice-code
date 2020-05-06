import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appChangecolor]'
})
export class ChangecolorDirective {

  constructor(private elmref:ElementRef) { }

  ngAfterViewInit(){
    this.elmref.nativeElement.style.color = "red";
  }

  changeColor(color){
    this.elmref.nativeElement.style.color = color;
  }

}
