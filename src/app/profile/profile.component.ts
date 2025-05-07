import { Component } from '@angular/core';
import { layout } from '../layout/layout';

@Component({
  selector: 'app-profile',
  imports: [...layout],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  email:string='rana9asaira@gmail.com';
  theme:string='light-mode';
  toggleTheme() {
    this.theme = this.theme === 'light-mode' ? 'dark-mode' : 'light-mode';
  }

  get headerClass() {
    return this.theme === 'light-mode' ? 'light-mode-header' : 'dark-mode-header';
  }

  get sidebarClass() {
    return this.theme === 'light-mode' ? 'light-mode-sidebar' : 'dark-mode-sidebar';
  }

  get footerClass() {
    return this.theme === 'light-mode' ? 'light-mode-footer' : 'dark-mode-footer';
  }

  get contentClass() {
    return this.theme === 'light-mode' ? 'light-mode-content' : 'dark-mode-content';
  }
    
  get buttonClass() {
    return this.theme === 'dark-mode' ? 'dark-mode-button' : 'light-mode-button';
  }
}
