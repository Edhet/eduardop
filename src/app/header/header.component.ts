import {Component, OnInit} from '@angular/core';
import {FooterComponent} from "../footer/footer.component";
import {AboutComponent} from "../about/about.component";
import {ProjectCardComponent} from "../project-card/project-card.component";
import * as data from "../../assets/json/langstext.json";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  readonly active: string = "bg-white text-black";
  static _contactText: string = "Contact me";
  englishActive = true;
  enClass: string = this.active;
  ptClass: string = "";

  langstext: any = (data as any).default;

  constructor() { }

  ngOnInit() {
    if (!localStorage.getItem("lang"))
      if (window.navigator.language.slice(0, 2) == "pt")
        this.portuguese();
      else
        this.english();
    else if (localStorage.getItem("lang") == "pt")
      this.portuguese();
    else
      this.english();
  }

  portuguese() {
    this.ptClass = this.active;
    this.enClass = "";
    this.englishActive = false;

    HeaderComponent._contactText = this.langstext.pt.ContactText;
    AboutComponent._aboutHeader = this.langstext.pt.AboutHeader;
    AboutComponent._aboutParagraph = this.langstext.pt.AboutParagraph;
    AboutComponent._expHeader = this.langstext.pt.ExpHeader;
    AboutComponent._expParagraph = this.langstext.pt.ExpParagraph;
    ProjectCardComponent._projectsHeader = this.langstext.pt.ProjectsHeader;
    ProjectCardComponent._emptyQuery = this.langstext.pt.EmptyQuery;
    FooterComponent._footerText = this.langstext.pt.FooterText;
    document.documentElement.setAttribute('lang', 'pt');
    localStorage.setItem("lang","pt");
  }

  english() {
    this.enClass = this.active;
    this.ptClass = "";
    this.englishActive = true;

    HeaderComponent._contactText = this.langstext.en.ContactText;
    AboutComponent._aboutHeader = this.langstext.en.AboutHeader;
    AboutComponent._aboutParagraph = this.langstext.en.AboutParagraph;
    AboutComponent._expHeader = this.langstext.en.ExpHeader;
    AboutComponent._expParagraph = this.langstext.en.ExpParagraph;
    ProjectCardComponent._projectsHeader = this.langstext.en.ProjectsHeader;
    ProjectCardComponent._emptyQuery = this.langstext.en.EmptyQuery;
    FooterComponent._footerText = this.langstext.en.FooterText;
    document.documentElement.setAttribute('lang', 'en');
    localStorage.setItem("lang","en");
  }

  get contactText(): string {
    return HeaderComponent._contactText;
  }
}
