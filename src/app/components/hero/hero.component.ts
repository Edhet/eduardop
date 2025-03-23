import { ProjectsService } from '../../services/projects.service';
import { Component, OnInit } from '@angular/core';
import { LocalizationService } from 'src/app/services/localization.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})

export class HeroComponent implements OnInit {
  public readonly GITHUB_PROFILE = "https://github.com/Edhet";
  public readonly LINKEDIN_PROFILE = "https://www.linkedin.com/in/eduardo-pinheiro-freitas/";

  public projectImages: string[] = [];
  public projectImage: string = "./assets/alphaJunior.jpg";
  private index = 0;

  constructor(public localizationService: LocalizationService, public projectService: ProjectsService) {}

  ngOnInit() {
    this.projectImages = this.projectService.projectList.map(p => p.image);

    setInterval(() => {
      this.projectImage = this.projectImages[this.index];
      this.index = (this.index + 1) % this.projectImages.length; 
    }, 700);
  }
}
