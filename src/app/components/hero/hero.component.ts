import { ProjectsService } from '../../services/projects.service';
import { Component } from '@angular/core';
import Languages from 'src/app/models/languages.model';
import { LocalizationService } from 'src/app/services/localization.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})

export class HeroComponent {
  public readonly GITHUB_PROFILE = "https://github.com/Edhet";
  public readonly LINKEDIN_PROFILE = "https://www.linkedin.com/in/eduardo-pinheiro-freitas/";

  constructor(public localizationService: LocalizationService, public projectService: ProjectsService) { }

  changeLanguage(langCode: string) {
    switch (langCode) {
      case "en": this.localizationService.changeLanguage(Languages.ENGLISH); break;
      case "pt": this.localizationService.changeLanguage(Languages.PORTUGUESE); break;
    }
  }
}
