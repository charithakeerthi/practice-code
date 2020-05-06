import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PreloadingwithdelayComponent } from './preloadingwithdelay/preloadingwithdelay.component';


const routes: Routes = [
  {path:'', component: PreloadingwithdelayComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreloadingwithdelayRoutingModule { }
