import { Component } from '@angular/core';
import { LocalizationService } from 'src/app/services/localization.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  public readonly githubUrl = "https://github.com/Edhet";
  
  constructor(public localizationService: LocalizationService) { }
}
