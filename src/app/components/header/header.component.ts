import { Component, HostListener } from '@angular/core';
import { Event, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  
  dropdownOpen: boolean = false;
  showConfirmLogout: boolean = false;

  constructor( private authService: AuthService, private router: Router) {}


  toggleMenu() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  onLogout() {
    this.showConfirmLogout = true;
  }

  confirmLogout() {
    this.showConfirmLogout = false;
    this.authService.logout();
    this.router.navigate(['auth/login']);
  }

  cancelLogout() {
    this.showConfirmLogout = false;
  }
}
