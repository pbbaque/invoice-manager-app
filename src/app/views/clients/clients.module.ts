import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientDetailComponent } from './client-detail/client-detail.component';
import { ClientsRoutingModule } from './clients-routing.module';
import { ComponentsModule } from '../../components/components.module';
import { ClientFormComponent } from './client-form/client-form.component';



@NgModule({
  declarations: [
    ClientListComponent,
    ClientDetailComponent,
    ClientFormComponent
  ],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    ComponentsModule
  ]
})
export class ClientsModule { }
