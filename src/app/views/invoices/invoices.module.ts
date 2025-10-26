import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { InvoicesRoutingModule } from './invoices-routing.module';
import { InvoiceFormComponent } from './invoice-form/invoice-form.component';



@NgModule({
  declarations: [
    InvoiceListComponent,
    InvoiceFormComponent
  ],
  imports: [
    CommonModule,
    InvoicesRoutingModule
  ]
})
export class InvoicesModule { }
