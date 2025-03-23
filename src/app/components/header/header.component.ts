import { animate, state, style, transition, trigger } from "@angular/animations";
import { Component, OnInit } from "@angular/core";
import Languages from "src/app/models/languages.model";
import { LocalizationService } from "src/app/services/localization.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('clicked', [
      state('small', style({
        width: '1.5rem',
        height: '1.5rem',
      })),
      state('big', style({
        width: '1.8rem',
        height: '1.8rem',
      })),
      transition('small => big', animate('125ms')),
      transition('big => small', animate('125ms')),
    ])
  ]
})
export class HeaderComponent implements OnInit {
  readonly SELECTED_STYLE = `relative before:w-[100%] before:h-[1px] before:bg-white before:absolute before:bottom-0 before:left-0 transition-all`;
  readonly UNSELECTED_STYLE = ``;
  readonly LANGUAGES = Languages;

  private readonly THEME_KEY_NAME = 'theme';

  themeBtnAnimationState = 'small';

  constructor(public localizationService: LocalizationService) { }

  ngOnInit() {
    const storedThemeSetting = localStorage.getItem(this.THEME_KEY_NAME);
    if (storedThemeSetting && storedThemeSetting === 'dark' 
      || (!storedThemeSetting && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      this.setTheme('dark');
    }
  }

  changeLanguage(language: Languages) {
    this.localizationService.changeLanguage(language);
  }

  async changeTheme() {
    this.themeBtnAnimationState = 'big';
    const html = document.getElementsByTagName('html')[0];

    if (html.classList.contains('dark')) {
      this.setTheme('light');
    }
    else {
      this.setTheme('dark');
    }

    await new Promise((resolve) => setTimeout(resolve, 250));
    this.themeBtnAnimationState = 'small';
  }

  private setTheme(theme: 'dark' | 'light') {
    localStorage.setItem(this.THEME_KEY_NAME, theme);
    const html = document.getElementsByTagName('html')[0];

    if (theme == 'dark') {
      html.classList.add('dark');
    }
    else {
      html.classList.remove('dark');
    }
  }
}