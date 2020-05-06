import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { EagerloadingRoutingModule } from './eagerloading-routing.module';
import { EagerloadingComponent } from './eagerloading/eagerloading.component';


@NgModule({
  declarations: [EagerloadingComponent],
  imports: [
    CommonModule,
    EagerloadingRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class EagerloadingModule { 
  constructor(){
    console.log("EagerLoading Module Started!");
  }
}
