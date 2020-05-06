import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { LazyloadingRoutingModule } from './lazyloading-routing.module';
import { LazyloadingComponent } from './lazyloading/lazyloading.component';
import { StudentComponent } from './student/student.component';
import { StudentDetailsComponent } from './student-details/student-details.component';


@NgModule({
  declarations: [LazyloadingComponent, StudentComponent, StudentDetailsComponent],
  imports: [
    CommonModule,
    LazyloadingRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class LazyloadingModule { 
  constructor(){
    console.log("Lazy loading Started!");
  }
}
