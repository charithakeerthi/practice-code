import { NgModule } from '@angular/core';
import { Routes, RouterModule, NoPreloading, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TemplatedrivenComponent } from './templatedriven/templatedriven.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { BootstrapvalidationsComponent } from './bootstrapvalidations/bootstrapvalidations.component';
import { MaterialvalidationComponent } from './materialvalidation/materialvalidation.component';
import { LocalformComponent } from './localform/localform.component';
import { CustompreloadingServiceService } from './core/services/custompreloading-service.service';
import { AuthGuard } from './core/guards/auth.guard';
import { DeactivateGuard } from './core/guards/deactivate.guard';
import { DeactivateformGuard } from './core/guards/deactivateform.guard';
import { ParentComponent } from './parent/parent.component';
import { ContentComponent } from './content/content.component';
import { DataParentComponent } from './data-parent/data-parent.component';
import { ContentchildComponent } from './contentchild/contentchild.component';
import { ContentMainComponent } from './contentchildren/content-main/content-main.component';
import { ViewParentComponent } from './view-parent/view-parent.component';
import { ViewReferenceComponent } from './view-reference/view-reference.component';
import { ViewchildParentComponent } from './viewchild-parent/viewchild-parent.component';
import { EmployeesComponent } from './employees/employees.component';
import { SinglepagecrudComponent } from './singlepagecrud/singlepagecrud.component';
import { TypescriptComponent } from './typescript/typescript.component';
import { SinglepageViewComponent } from './singlepage-view/singlepage-view.component';
import { ConditionsComponent } from './conditions/conditions.component';
import { ViewChildrenComponent } from './view-children/view-children.component';
import { Es6Component } from './es6/es6.component';
import { MyserviceComponent } from './myservice/myservice.component';
import { GethttpComponent } from './gethttp/gethttp.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { InterceptorComponent } from './interceptor/interceptor.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'templatedriven', component: TemplatedrivenComponent },
  { path: 'reactive', component: ReactiveComponent, canActivate: [AuthGuard] },
  { path: 'bootstrapvalidations', component: BootstrapvalidationsComponent },
  { path: 'materialvalidations', component: MaterialvalidationComponent },
  // { path: 'localform', component: LocalformComponent, canDeactivate: [DeactivateGuard] },
  { path: 'localform', component: LocalformComponent, canDeactivate: [DeactivateformGuard] },
  { path: 'lazyloading', loadChildren: () => import('./lazyloading/lazyloading.module').then(l => l.LazyloadingModule) },
  { path: 'preloading', loadChildren: () => import('./preloading/preloading.module').then(p => p.PreloadingModule), data: { preload: true } },
  { path: 'preloadingwithdelay', loadChildren: () => import('./preloadingwithdelay/preloadingwithdelay.module').then(l => l.PreloadingwithdelayModule), data: { preload: true, delay: true } },
  // { path: 'parent', component: ParentComponent },
  { path: 'content', component: ContentComponent },
  { path: 'data-parent', component: DataParentComponent },
  { path: 'content-child', component: ContentchildComponent },
  { path: 'content-children', component: ContentMainComponent },
  { path: 'view-parent', component: ViewParentComponent },
  { path: 'view-reference', component: ViewReferenceComponent },
  { path: 'viewchild-parent', component: ViewchildParentComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: 'singlepagecrud', component: SinglepagecrudComponent },
  { path: 'singlepagecrud-view/:id', component: SinglepageViewComponent},
  { path: 'typescript', component: TypescriptComponent },
  { path: 'conditions', component: ConditionsComponent },
  { path: 'view-children', component: ViewChildrenComponent },
  { path: 'es6', component: Es6Component },
  { path: 'myservices', component: MyserviceComponent },
  { path: 'gethttp', component: GethttpComponent },
  { path: 'rxjs', component: RxjsComponent },
  { path: 'interceptors', component: InterceptorComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    // { preloadingStrategy: NoPreloading }
    // { preloadingStrategy: PreloadAllModules }
    { preloadingStrategy: CustompreloadingServiceService }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
