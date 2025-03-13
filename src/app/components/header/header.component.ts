import { Component } from "@angular/core";
import Languages from "src/app/models/languages.model";
import { LocalizationService } from "src/app/services/localization.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  readonly SELECTED_STYLE = `border-0 border-b`;
  readonly UNSELECTED_STYLE = ``;
  readonly LANGUAGES = Languages;

  constructor(public localizationService: LocalizationService) { }

  changeLanguage(language: Languages) {
    this.localizationService.changeLanguage(language);
  }
}