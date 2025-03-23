import { Component, OnInit } from '@angular/core';
import { LocalizationService } from 'src/app/services/localization.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public readonly GITHUB_SOURCE_URL = "https://github.com/Edhet/eduardop";
  
  time: string = "";

  constructor(public localizationService: LocalizationService) { }

  ngOnInit() {
    setInterval(() => {
      this.setClockTime()
    }, 1000);    
  }

  setClockTime() {
    const now = new Date(new Date().toLocaleString('en', {timeZone: 'America/Sao_Paulo'}));
    this.time = `${this.formatNumber(now.getHours())}:${this.formatNumber(now.getMinutes())}`;
  }

  private formatNumber(n: number) {
    const s = n.toString();
    return s.length == 1 ? `0${s}` : s;
  }
}
