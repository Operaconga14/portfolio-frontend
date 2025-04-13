import { Component, inject } from '@angular/core';
import { WordsService } from '../../services/words.service';

interface Service {
  title: string;
  description: string;
}
@Component({
  selector: 'app-services',
  standalone: true,
  imports: [],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent {
  myservice: any;

  private wordService = inject(WordsService);

  ngOnInit() {
    this.myservice = this.wordService.myService;
    this.myservice.forEach((service: Service) => service);
  }
}
