import { Component, EventEmitter, Output } from '@angular/core';
import { UserNameComponent } from '../user-name/user-name.component';
import { LogoComponent } from '../logo/logo.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [UserNameComponent, LogoComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  welcomeMessage: string = 'Hello and welcome ';
  isDarkMode: boolean = false;

  @Output() themeChange: EventEmitter<void> = new EventEmitter<void>();

  constructor(private router: Router) {}

  logoutClick() {
    alert('Thank you for visiting our website, good bye');
    this.router.navigate(['/login']); 
  }

  toggleTheme() { 
    this.isDarkMode = !this.isDarkMode;
    
    document.body.classList.toggle('dark-mode', this.isDarkMode);
    document.body.classList.toggle('light-mode', !this.isDarkMode);

    const header = document.querySelector('.header');
    const footer = document.querySelector('.footer');
    const sidebar = document.querySelector('.sidebar');

    if (header) {
      header.classList.toggle('dark-mode-header', this.isDarkMode);
      header.classList.toggle('light-mode-header', !this.isDarkMode);
    }
    if (footer) {
      footer.classList.toggle('dark-mode-footer', this.isDarkMode);
      footer.classList.toggle('light-mode-footer', !this.isDarkMode);
    }
    if (sidebar) {
      sidebar.classList.toggle('dark-mode-sidebar', this.isDarkMode);
      sidebar.classList.toggle('light-mode-sidebar', !this.isDarkMode);
    }

    this.themeChange.emit(); 
  }
}