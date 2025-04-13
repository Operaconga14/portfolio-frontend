import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WordsService } from '../../services/words.service';
import { CommonModule } from '@angular/common';

interface Project {
  name: string;
  description: string;
  techStack: string[];
}
@Component({
  selector: 'app-short-portfolio',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './short-portfolio.component.html',
  styleUrl: './short-portfolio.component.scss',
})
export class ShortPortfolioComponent {
  shortproject: any;
  techStack: any;

  private wordsService = inject(WordsService);

  ngOnInit() {
    this.shortproject = this.wordsService.myProjects;
    this.shortproject.forEach((project: Project) => {
      console.log('Project:', project);
    });
    this.techStack = this.wordsService.techStack;
  }
}
