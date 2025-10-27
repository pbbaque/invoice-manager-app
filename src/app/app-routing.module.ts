import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full'
  },
  { 
    path: 'auth', loadChildren: () => import('./views/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [authGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule) },
      { path: 'clients', loadChildren: () => import('./views/clients/clients.module').then(m => m.ClientsModule) },
      { path: 'companies', loadChildren: () => import('./views/companies/companies.module').then(m => m.CompaniesModule) },
      { path: 'employees', loadChildren: () => import('./views/employees/employees.module').then(m => m.EmployeesModule) },
      { path: 'invoices', loadChildren: () => import('./views/invoices/invoices.module').then(m => m.InvoicesModule) },
      { path: 'users', loadChildren: () => import('./views/users/users.module').then(m => m.UsersModule) },
      { path: 'products', loadChildren: () => import('./views/products/products.module').then(m => m.ProductsModule) },
      { path: '**', component: NotFoundComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
