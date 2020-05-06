import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreloadingRoutingModule } from './preloading-routing.module';
import { PreloadingComponent } from './preloading/preloading.component';


@NgModule({
  declarations: [PreloadingComponent],
  imports: [
    CommonModule,
    PreloadingRoutingModule
  ]
})
export class PreloadingModule {
  constructor() {
    console.log("Preloading Started!");
  }
 }
