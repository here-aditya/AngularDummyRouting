import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { DepartmentComponent } from './department/department.component';
import { MenuListComponent } from './common/menu-list.component';
import { HeaderGuestComponent } from './common/header-guest.component';
import { HeaderUserComponent } from './common/header-user.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path: 'employees', component: EmployeeListComponent},
  {path: 'departments', component: DepartmentComponent},
  {path: 'manageprofile', component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const AppRoutingComponent = [EmployeeListComponent, DepartmentComponent, 
                                      MenuListComponent, HeaderGuestComponent, 
                                      HeaderUserComponent, ProfileComponent];
