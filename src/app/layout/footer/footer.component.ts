import { Component, Input } from '@angular/core';
import { UserNameComponent } from '../user-name/user-name.component';

@Component({
  selector: 'app-footer',
  imports: [UserNameComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  rights:string='All rights received to IIH '
  @Input() theme: string = 'light-mode';
}
