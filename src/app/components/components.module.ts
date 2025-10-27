import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert/alert.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { EmptyStateComponent } from './empty-state/empty-state.component';
import { HeaderComponent } from './header/header.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { ModalComponent } from './modal/modal.component';
import { PaginationComponent } from './pagination/pagination.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TableComponent } from './table/table.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { ConfirmComponent } from './confirm/confirm.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EntityDetailComponent } from './entity-detail/entity-detail.component';



@NgModule({
  declarations: [
    AlertComponent, 
    BreadcrumbComponent, 
    EmptyStateComponent, 
    HeaderComponent, 
    LoadingSpinnerComponent, 
    ModalComponent, 
    PaginationComponent, 
    SidebarComponent, 
    TableComponent, 
    FooterComponent, 
    ConfirmComponent, 
    EntityDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    AlertComponent, 
    BreadcrumbComponent, 
    EmptyStateComponent, 
    HeaderComponent, 
    LoadingSpinnerComponent, 
    ModalComponent, 
    PaginationComponent, 
    SidebarComponent, 
    TableComponent,
    FooterComponent,
    ConfirmComponent,
    FormsModule,
    ReactiveFormsModule,
    EntityDetailComponent
  ]
})
export class ComponentsModule { }
