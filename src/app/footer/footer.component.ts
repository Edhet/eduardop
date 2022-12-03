import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  static _footerText: string = "Made in Angular with Tailwind";
  static _projectURL: string = "https://github.com/Edhet";
  get footerText(): string {
    return FooterComponent._footerText;
  }
  get projectURL(): string {
    return FooterComponent._projectURL;
  }
}
