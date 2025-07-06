import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { InvoiceListComponent } from './views/invoices/invoice-list/invoice-list.component';
import { ClientListComponent } from './views/clients/client-list/client-list.component';
import { UserListComponent } from './views/users/user-list/user-list.component';
import { EmployeeListComponent } from './views/employees/employee-list/employee-list.component';
import { LoginComponent } from './views/users/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'invoices', component: InvoiceListComponent },
  { path: 'clients', component: ClientListComponent },
  { path: 'users', component: UserListComponent },
  { path: 'employees', component: EmployeeListComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'login' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
