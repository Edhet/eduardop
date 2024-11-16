import { LocalizationService } from 'src/app/services/localization.service';
import { Component, OnInit } from '@angular/core';
import Languages from './models/languages.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Eduardo P.';

  constructor(private localizationService: LocalizationService) { }

  ngOnInit() {
    document.getElementById('js-disclaimer')?.remove();
    
    if (localStorage.getItem("lang") == "en") {
      this.localizationService.changeLanguage(Languages.ENGLISH);
    }
    else if (localStorage.getItem("lang") == "pt") {
      this.localizationService.changeLanguage(Languages.PORTUGUESE);
    }
    else {
      if (window.navigator.language.slice(0, 2) == "pt")
        this.localizationService.changeLanguage(Languages.PORTUGUESE);
      else
        this.localizationService.changeLanguage(Languages.ENGLISH);
    }
  }
}
