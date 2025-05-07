import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { components } from './component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,...components],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'component-task';
}
