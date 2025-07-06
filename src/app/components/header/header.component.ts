import { Component, HostListener } from '@angular/core';
import { Event } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  dropdownOpen: boolean = false;

  toggleMenu() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  logout() {

  }
}
