import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientListComponent } from './views/clients/client-list/client-list.component';
import { ClientDetailComponent } from './views/clients/client-detail/client-detail.component';
import { InvoiceListComponent } from './views/invoices/invoice-list/invoice-list.component';
import { InvoiceDetailComponent } from './views/invoices/invoice-detail/invoice-detail.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { LoginComponent } from './views/users/login/login.component';
import { UserListComponent } from './views/users/user-list/user-list.component';
import { UserDetailComponent } from './views/users/user-detail/user-detail.component';
import { CompanyListComponent } from './views/companies/company-list/company-list.component';
import { CompanyDetailComponent } from './views/companies/company-detail/company-detail.component';
import { EmployeeListComponent } from './views/employees/employee-list/employee-list.component';
import { EmployeeDetailComponent } from './views/employees/employee-detail/employee-detail.component';
import { ComponentsModule } from './components/components.module';
import { ForgetComponent } from './views/users/forget/forget.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientListComponent,
    ClientDetailComponent,
    InvoiceListComponent,
    InvoiceDetailComponent,
    DashboardComponent,
    NotFoundComponent,
    LoginComponent,
    UserListComponent,
    UserDetailComponent,
    CompanyListComponent,
    CompanyDetailComponent,
    EmployeeListComponent,
    EmployeeDetailComponent,
    ForgetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
