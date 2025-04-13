import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  title = 'Amire Joseph';
  nav_detail: any;

  ngOnInit(): void {
    this.showNavDetails();
  }

  showNavDetails() {
    this.nav_detail = [
      { name: 'About', number: '01', url: '#about' },
      { name: 'Experience', number: '02', url: '#experience' },
      { name: 'Projects', number: '03', url: '#projects' },
      { name: 'Contact', number: '03', url: '#contact' },
    ];
  }
}
