import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './CRUD/users/add-user/add-user.component';
import { DeleteUserComponent } from './CRUD/users/delete-user/delete-user.component';
import { EditUserComponent } from './CRUD/users/edit-user/edit-user.component';
import { ListUsersComponent } from './CRUD/users/list-users/list-users.component';
import { ViewUserComponent } from './CRUD/users/view-user/view-user.component';
import { AdminAccessGuard } from './my-app/admin-access.guard';
import { AdminHomeComponent } from './my-app/admin-home/admin-home.component';
import { CourseDetailsComponent } from './my-app/course-details/course-details.component';
import { CourseDurationComponent } from './my-app/course-duration/course-duration.component';
import { CourseFeeComponent } from './my-app/course-fee/course-fee.component';
import { PageNotFoundComponent } from './my-app/page-not-found/page-not-found.component';
import { StudentDetailsComponent } from './my-app/student-details/student-details.component';
import { StudentListComponent } from './my-app/student-list/student-list.component';

const routes: Routes = [
  // {path:"", redirectTo:"student", pathMatch:"full"},
  // {path:"admin", component:AdminHomeComponent,canActivate:[AdminAccessGuard]},
  // {path:"", component:StudentDetailsComponent},
  // {path:"student",component:StudentListComponent},
  // {path:"course-list",component:StudentDetailsComponent},
  // {path:"course-list/:id",component:CourseDetailsComponent,children:[
  //     {path:"duration",component:CourseDurationComponent},
  //     {path:"fee",component:CourseFeeComponent}
  // ] },
  // { path: 'faculty', loadChildren: () => import('./my-app/faculty/faculty.module').then(m => m.FacultyModule) },
  // {path:"**",component:PageNotFoundComponent}
    // { path: 'users',
    //   children: [
    //     { path: '', component: ListUsersComponent },
    //     { path:'list', component:ListUsersComponent},
    //     { path: 'view/:id', component: ViewUserComponent },
    //     { path: 'delete/:id', component: DeleteUserComponent },
    //      { path: 'edit/:id', component: EditUserComponent },
    //      { path: 'add', component: AddUserComponent }
    //   ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
