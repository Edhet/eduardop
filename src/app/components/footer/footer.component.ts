import { Component } from '@angular/core';
import { LocalizationService } from 'src/app/services/localization.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  public readonly GITHUB_SOURCE_URL = "https://github.com/Edhet/eduardop";
  
  constructor(public localizationService: LocalizationService) { }
}
