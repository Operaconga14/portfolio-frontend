import { Component } from '@angular/core';
import { DefaultLayoutComponent } from './layout/default-layout/default-layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DefaultLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'amire-joseph';
}
