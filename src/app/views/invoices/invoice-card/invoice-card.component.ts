import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Invoice } from '../../../models/invoice';

@Component({
    selector: 'app-invoice-card',
    templateUrl: './invoice-card.component.html',
    styleUrls: ['./invoice-card.component.scss'],
    standalone: false
})
export class InvoiceCardComponent {
  @Input() invoice!: Invoice;

  @Output() openDetail = new EventEmitter<Invoice>();
  @Output() edit = new EventEmitter<Invoice>();
  @Output() delete = new EventEmitter<Invoice>();

  onOpenDetail() {
    this.openDetail.emit(this.invoice);
  }

  onEdit(event: MouseEvent) {
    event.stopPropagation();
    this.edit.emit(this.invoice);
  }

  onDelete(event: MouseEvent) {
    event.stopPropagation();
    this.delete.emit(this.invoice);
  }
}
