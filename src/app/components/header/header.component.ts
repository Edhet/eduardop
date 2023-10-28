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

export class HeaderComponent implements OnInit {
  public feature?: Tag = this.projectService.filters[0];
  
  constructor(public localizationService: LocalizationService, public projectService: ProjectsService) { }

  async ngOnInit() {
    await this.changeText();
  }

  async changeText() {
    let tagIndex = 0;
    while(true) {
      await new Promise((resolve) => setTimeout(resolve, 1250));
      this.feature = this.projectService.filters[tagIndex];
      tagIndex = (tagIndex + 1) % this.projectService.filters.length;
    }
  }

  changeLanguage(langCode: string) {
    switch (langCode) {
      case "en": this.localizationService.changeLanguage(Languages.ENGLISH); break;
      case "pt": this.localizationService.changeLanguage(Languages.PORTUGUESE); break;
    }
  }
}
