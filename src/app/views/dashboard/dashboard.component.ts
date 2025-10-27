import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../../services/invoice.service'; 
import { ClientService } from '../../services/client.service'; 
import { ProductService } from '../../services/product.service'; 

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  totalFacturado: number = 0;
  facturasMes: number = 0;
  facturasHoy: number = 0;

  chartData: number[] = [];
  chartLabels: string[] = [];

  ultimasFacturas: any[] = [];
  topClientes: any[] = [];
  topProductos: any[] = [];

  constructor(
    private invoiceService: InvoiceService,
    private clientService: ClientService,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.loadKPIs();
    this.loadChart();
    this.loadRecentData();
  }

  private loadKPIs(): void {
    // this.invoiceService.getTotalFacturado().subscribe(v => this.totalFacturado = v);
    // this.invoiceService.getFacturasMes().subscribe(v => this.facturasMes = v);
    // this.invoiceService.getFacturasHoy().subscribe(v => this.facturasHoy = v);
  }

  private loadChart(): void {
    // this.invoiceService.getFacturasMensuales().subscribe(data => {
    //   this.chartLabels = data.map(d => d.mes);
    //   this.chartData = data.map(d => d.total);
    // });
  }

  private loadRecentData(): void {
    // this.invoiceService.getUltimasFacturas().subscribe(f => this.ultimasFacturas = f);
    // this.clientService.getTopClientes().subscribe(c => this.topClientes = c);
    // this.productService.getTopProductos().subscribe(p => this.topProductos = p);
  }
}
