import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { WordsService } from '../../services/words.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  currentRoute: string = '';
  fulldetails: any;
  totalProject: number | undefined;
  ongoing: any;
  jobsuccess: any;

  private activatedRoute = inject(ActivatedRoute);
  private wordsService = inject(WordsService);

  ngOnInit(): void {
    this.activatedRoute.url.subscribe((url) => {
      this.currentRoute = url.join('/');
    });

    this.fulldetails = this.wordsService.aboutMe;
    this.totalProject = this.wordsService.totalProject;
    this.ongoing = this.wordsService.ongoing;
    this.jobsuccess = this.wordsService.jobsuccess;
  }

  shouldHideElement(): boolean {
    return this.currentRoute === ''; // Replace 'desired-route' with the route you want to match
  }
}
