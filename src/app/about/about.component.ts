import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  static _aboutHeader: string = "About Me";
  static  _aboutParagraph: string = "I'm a brazilian from Rio de Janeiro, a Tech Enthusiast especially interested in Infrastructure, Back-End development, Low level technology and Hardware. Did half a semester in Electrical Engineering and at the moment i'm doing a bachelors degree in Information Systems at UNIRIO. Also interested in design and art, already did amateur game development and have written some RPG books.";

  static _expHeader: string = "Skills and Experience";
  static  _expParagraph: string = "Linux user for 2 years, having used many end-user distros like Fedora, Pop!OS and currently using Arch. Programming in Rust for about 8 months and learning other languages like Python and C/C++ along with it, also studied a bit of relational databases in MySQL and SQLite and recently i've been studying the web stacks with HTML, JavaScript/TypeScript, CSS and its frameworks.";

  get aboutHeader(): string {
    return AboutComponent._aboutHeader;
  }
  get aboutParagraph(): string {
    return AboutComponent._aboutParagraph;
  }
  get expHeader(): string {
    return AboutComponent._expHeader;
  }
  get expParagraph(): string {
    return AboutComponent._expParagraph;
  }
}
