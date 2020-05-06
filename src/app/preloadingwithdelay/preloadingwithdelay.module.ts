import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreloadingwithdelayRoutingModule } from './preloadingwithdelay-routing.module';
import { PreloadingwithdelayComponent } from './preloadingwithdelay/preloadingwithdelay.component';


@NgModule({
  declarations: [PreloadingwithdelayComponent],
  imports: [
    CommonModule,
    PreloadingwithdelayRoutingModule
  ]
})
export class PreloadingwithdelayModule { 
  constructor() {
    console.log("Preloading with delay Started!");
  }
}
