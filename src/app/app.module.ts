import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSidenavModule} from '@angular/material/sidenav';
import { LayoutModule } from './CRUD/layout/layout.module';
import { UsersModule } from './CRUD/users/users.module';
import { MatListModule } from '@angular/material/list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TestComponent } from './my-app/test/test.component';
import { StudentListComponent } from './my-app/student-list/student-list.component';
import { StudentDetailsComponent } from './my-app/student-details/student-details.component';
import { StudentService } from './my-app/student.service';
import { PageNotFoundComponent } from './my-app/page-not-found/page-not-found.component';
import { CourseDetailsComponent } from './my-app/course-details/course-details.component';
import { CourseDurationComponent } from './my-app/course-duration/course-duration.component';
import { CourseFeeComponent } from './my-app/course-fee/course-fee.component';
import { AdminHomeComponent } from './my-app/admin-home/admin-home.component';
import { AdminAccessGuard } from './my-app/admin-access.guard';
import { TdfComponent } from './Forms/tdf/tdf.component';
import { ReactiveFormsComponent } from './Forms/reactive-forms/reactive-forms.component';
import { ChangecolorDirective } from './Forms/changecolor.directive';
import { ChildComponent } from './lifeCycleHooks/child/child.component';
import { ParentComponent } from './lifeCycleHooks/parent/parent.component';
import { PromiseComponent } from './Promises-Obersvables/promise/promise.component';
import { ObservableComponent } from './Promises-Obersvables/observable/observable.component';
import { SubjectBehaviourComponent } from './Promises-Obersvables/subject-behaviour/subject-behaviour.component';

@NgModule({
  declarations: [
  AppComponent,TestComponent,StudentListComponent,StudentDetailsComponent, PageNotFoundComponent,
  CourseDetailsComponent, CourseDurationComponent, CourseFeeComponent, AdminHomeComponent, 
  TdfComponent, ReactiveFormsComponent, ChangecolorDirective, ChildComponent, ParentComponent, PromiseComponent, ObservableComponent, SubjectBehaviourComponent
  ],
  imports: [
  BrowserModule,ReactiveFormsModule,AppRoutingModule,HttpClientModule,RouterModule,BrowserAnimationsModule,
  MatButtonModule,MatInputModule,MatPaginatorModule,MatTableModule,FormsModule,MatToolbarModule,MatIconModule,
  MatFormFieldModule,MatSidenavModule,LayoutModule,UsersModule,MatListModule,MatSnackBarModule
  ],
  providers: [StudentService,AdminAccessGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
