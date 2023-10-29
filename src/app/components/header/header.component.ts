import { ProjectsService } from './../../services/projects.service';
import { Component, OnInit } from '@angular/core';
import Languages from 'src/app/models/languages.model';
import Tag from 'src/app/models/tag.model';
import { LocalizationService } from 'src/app/services/localization.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
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
