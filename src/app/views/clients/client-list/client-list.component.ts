import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../../services/client.service';
import { Client } from '../../../models/client';
import { AddressService } from '../../../services/address.service';
import { Address } from '../../../models/address';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { DetailConfig } from '../../../models/detail-config';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrl: './client-list.component.scss'
})
export class ClientListComponent implements OnInit {

  clients: Client[] = [];
  filteredClients: Client [] = [];
  errorMessage: string = '';
  searchTerm: string = '';
  confirmMessage:string = '';
  errorVisible: boolean = false;
  noResults: boolean = false;
  showConfirmDelete: boolean = false;
  clientToDeleteId:number | null = null;
  selectedClient: Client | null = null;
  detailVisible: boolean = false;

  clientDetailConfig: DetailConfig = {
    title: 'Detalle del Cliente',
    fields: [
      { key: 'id', label: 'ID' },
      { key: 'name', label: 'Nombre' },
      { key: 'lastname', label: 'Apellido' },
      { key: 'email', label: 'Correo' },
      { key: 'phone', label: 'Teléfono' },
      { key: 'company.name', label: 'Compañía' }
    ]
  };

  constructor(
    private clientService: ClientService, 
    private addressService: AddressService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadClients();
  }

  loadClients(): void {
    this.clientService.findAll().subscribe({
      next: (clients) => {
        this.clients = clients;
        this.filteredClients = [...clients];
        this.noResults = false;
      },
      error: (error) => this.handleError(error)
    });
  }

  searchClients(): void {
    const term = this.searchTerm.toLowerCase();

    if(!term) {
      this.filteredClients = [...this.clients];
      this.noResults = false;
      return;
    }

    if(this.clients.length <=10) { 
      this.filteredClients = this.clients.filter(client => 
        client.name.toLowerCase().includes(term) ||
        client.lastname.toLowerCase().includes(term) ||
        client.email.toLowerCase().includes(term) ||
        client.phone.toLowerCase().includes(term) ||
        this.formatAddress(client.address).toLowerCase().includes(term)
      );
      this.noResults = this.filteredClients.length === 0;
    } else {
      this.clientService.searchClients(term).subscribe({
        next: (clients) => {
          this.filteredClients = clients
          this.noResults = clients.length === 0;
        },
        error: (error) => this.handleError(error)
      });
    }
  }

  goToCreate(): void {
    this.router.navigate(['/clients/create']);
  }

  goToEdit(clientId: number): void {
    this.router.navigate([`/clients/edit/${clientId}`]);
  }

  deleteClient(client: Client): void {
    this.clientToDeleteId = client.id;
    this.confirmMessage = '¿Está seguro de que desea eliminar al cliente ' + client.id + ' ' + client.name + ' ' + client.lastname + '?';
    this.showConfirmDelete = true;
  }

  confirmDelete(): void {
    if(this.clientToDeleteId !== null) {
      this.clientService.delete(this.clientToDeleteId).subscribe({
        next: () => this.loadClients(),
        error: (error) => this.handleError(error),
        complete: () => {
          this.clientToDeleteId = null;
          this.showConfirmDelete = false;
          this.confirmMessage = '';
        }
      })
    }
  }

  cancelDelete(): void {
    this.clientToDeleteId = null;
    this.showConfirmDelete = false;
    this.confirmMessage = '';
  }

  private handleError(error:HttpErrorResponse): void {
    console.error('Error al cargar los clientes:', error);
    this.errorMessage = error?.message || 'Error en la busqueda de clientes. Intentelos de nuevo.';
    this.errorVisible = true;
  }

  openDetail(client: Client): void {
    this.selectedClient = { ...client };
    this.detailVisible = true;
  }

  closeDetail(): void {
    this.selectedClient = null;
    this.detailVisible = false;
  }

  formatAddress(address: Address): string {
    return this.addressService.formatAddress(address);
  }

  formatPhone(country: string, phone: string): string {
    return this.addressService.formatPhone(country, phone);
  }
}
