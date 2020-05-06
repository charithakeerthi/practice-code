import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazyloadingComponent } from './lazyloading/lazyloading.component';
import { StudentComponent } from './student/student.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { CanactivatechildGuard } from '../core/guards/canactivatechild.guard';


const routes: Routes = [
  // {path:'', component: LazyloadingComponent}
  {
    path: '',component: LazyloadingComponent, canActivateChild: [CanactivatechildGuard],
    children: [
      // {path: '', component: LazyloadingComponent},
      {path: 'student', component: StudentComponent},
      {path: 'student-detail', component: StudentDetailsComponent},
    ]
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyloadingRoutingModule { }
