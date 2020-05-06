import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// material
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TemplatedrivenComponent } from './templatedriven/templatedriven.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { BootstrapvalidationsComponent } from './bootstrapvalidations/bootstrapvalidations.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialvalidationComponent } from './materialvalidation/materialvalidation.component';
import { LocalformComponent } from './localform/localform.component';
import { EagerloadingModule } from './eagerloading/eagerloading.module';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ContentComponent } from './content/content.component';
import { DataParentComponent } from './data-parent/data-parent.component';
import { DataChildComponent } from './data-child/data-child.component';
import { ContentchildComponent } from './contentchild/contentchild.component';
import { ContentchildParentComponent } from './contentchild/contentchild-parent/contentchild-parent.component';
import { ContentchildChildComponent } from './contentchild/contentchild-child/contentchild-child.component';
import { ContentMainComponent } from './contentchildren/content-main/content-main.component';
import { ContentchildrenParentComponent } from './contentchildren/contentchildren-parent/contentchildren-parent.component';
import { ContentchildrenChildComponent } from './contentchildren/contentchildren-child/contentchildren-child.component';
import { ViewParentComponent } from './view-parent/view-parent.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { ViewReferenceComponent } from './view-reference/view-reference.component';
import { ViewchildParentComponent } from './viewchild-parent/viewchild-parent.component';
import { ViewchildChildComponent } from './viewchild-child/viewchild-child.component';
import { EmployeesComponent } from './employees/employees.component';
import { SinglepagecrudComponent } from './singlepagecrud/singlepagecrud.component';
import { TypescriptComponent } from './typescript/typescript.component';
import { SinglepageViewComponent } from './singlepage-view/singlepage-view.component';
import { ConditionsComponent } from './conditions/conditions.component';
import { ChangecolorDirective } from './core/directives/changecolor.directive';
import { ViewChildrenComponent } from './view-children/view-children.component';
import { Es6Component } from './es6/es6.component';
import { MyserviceComponent } from './myservice/myservice.component';
import { GethttpComponent } from './gethttp/gethttp.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { Child1Component } from './rxjs/child1/child1.component';
import { Child2Component } from './rxjs/child2/child2.component';
import { Child3Component } from './rxjs/child3/child3.component';
import { InterceptorComponent } from './interceptor/interceptor.component';
import { HeaderInterceptors } from './core/interceptors/header-interceptors';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TemplatedrivenComponent,
    ReactiveComponent,
    BootstrapvalidationsComponent,
    MaterialvalidationComponent,
    LocalformComponent,
    ParentComponent,
    ChildComponent,
    ContentComponent,
    DataParentComponent,
    DataChildComponent,
    ContentchildComponent,
    ContentchildParentComponent,
    ContentchildChildComponent,
    ContentMainComponent,
    ContentchildrenParentComponent,
    ContentchildrenChildComponent,
    ViewParentComponent,
    ViewChildComponent,
    ViewReferenceComponent,
    ViewchildParentComponent,
    ViewchildChildComponent,
    EmployeesComponent,
    SinglepagecrudComponent,
    TypescriptComponent,
    SinglepageViewComponent,
    ConditionsComponent,
    ChangecolorDirective,
    ViewChildrenComponent,
    Es6Component,
    MyserviceComponent,
    GethttpComponent,
    RxjsComponent,
    Child1Component,
    Child2Component,
    Child3Component,
    InterceptorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    EagerloadingModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptors, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    console.log("App Module started!");
  }
}
