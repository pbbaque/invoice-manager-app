import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DetailConfig } from '../../models/detail-config';

@Component({
  selector: 'app-entity-detail',
  templateUrl: './entity-detail.component.html',
  styleUrl: './entity-detail.component.scss'
})
export class EntityDetailComponent {
  @Input() entity: any;
  @Input() config!: DetailConfig;
  @Input() visible: boolean = false;
  @Output() closed = new EventEmitter<void>();

  getValueByPath(obj: any, path: string): any {
    const value = path.split('.').reduce((acc, part) => acc && acc[part], obj);
    return value !== undefined && value !== null ? value : "-"; 
  }

    onCloseButtonClick(): void {
    this.closed.emit();
  }

    onOverlayClick(): void {
    this.closed.emit();
  }
}
