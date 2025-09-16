import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../../services/client.service';
import { Client } from '../../../models/client';
import { AddressService } from '../../../services/address.service';
import { Address } from '../../../models/address';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrl: './client-list.component.scss'
})
export class ClientListComponent implements OnInit {

  clients: Client[] = [];
  errorMessage = '';
  errorVisible = false;

  constructor(private clientService: ClientService, private addressService: AddressService) { }

  ngOnInit(): void {
    this.loadClients();
  }

  loadClients(): void {
    this.clientService.findAll().subscribe({
      next: (clients) => this.clients = clients,
      error: (error) => {
        console.error('Error cargando clientes:', error);
        this.errorMessage = 'Error al cargar los clientes. Inténtalo de nuevo.';
        this.errorVisible = true;
      }
    });
  }

  formatAddress(address: Address): string {
    return this.addressService.formatAddress(address);
  }

  formatPhone(country: string, phone: string): string {
    return this.addressService.formatPhone(country, phone);
  }
}
