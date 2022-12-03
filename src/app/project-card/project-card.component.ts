import { Component } from '@angular/core';
import * as data from '../../assets/json/projects.json';
import {timeSinceInMicros} from "@angular/compiler-cli/src/ngtsc/perf/src/clock";

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent {
  static _projectsHeader: string = "Projects";
  projectsJSON = (data as any).default;
  projects = new Array<Project>;

  constructor() {
    for (const i in this.projectsJSON) {
      let tempProject: Project = {name: "", image: "", url: "", languages: []};
      let projLanguages = new Array<Language>;

      for (const j in this.projectsJSON[i].languages) {

        let tempLang: Language = {name: "", color: "", bgColor: ""};
        tempLang.name = this.projectsJSON[i].languages[j].langName;
        tempLang.color = this.projectsJSON[i].languages[j].color;
        tempLang.bgColor = this.projectsJSON[i].languages[j].bgColor;
        projLanguages.push(tempLang);
      }

      tempProject.name = this.projectsJSON[i].name;
      tempProject.image = this.projectsJSON[i].image;
      tempProject.url = this.projectsJSON[i].url;
      tempProject.languages = projLanguages;

      this.projects.push(tempProject);
    }
  }

  get projectsHeader() {
    return ProjectCardComponent._projectsHeader;
  }
}

interface Project {
  name:string,
  image:string,
  url:string,
  languages: Array<Language>
}

interface Language {
  name:string,
  color:string,
  bgColor:string
}
