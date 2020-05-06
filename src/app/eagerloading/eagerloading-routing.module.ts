import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EagerloadingComponent } from './eagerloading/eagerloading.component';


const routes: Routes = [
  {path:'eager', component: EagerloadingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EagerloadingRoutingModule { }
