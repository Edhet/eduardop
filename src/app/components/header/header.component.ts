import { Component } from '@angular/core';
import Languages from 'src/app/models/languages.model';
import { LocalizationService } from 'src/app/services/localization.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  readonly active: string = "bg-white border-white text-black hover:text-black";
  readonly inactive: string = "border-zinc-400 text-zinc-400 hover:border-white hover:text-white";

  constructor(public localizationService: LocalizationService) { }

  changeLanguage(langCode: string) {
    switch (langCode) {
      case "en": this.localizationService.changeLanguage(Languages.ENGLISH); break;
      case "pt": this.localizationService.changeLanguage(Languages.PORTUGUESE); break;
    }
  }
}
