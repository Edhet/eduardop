import {Component, OnInit} from '@angular/core';
import * as data from '../../assets/json/projects.json';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements OnInit {
  static _projectsHeader: string = "Projects";
  static _emptyQuery: string = "No project fullfills the current filters";

  projectsJSON = (data as any).default;
  projects = new Array<Project>;
  languages = new Array<Language>;
  activeFilters = new Array<Language>;

  constructor() { }

  ngOnInit() {
    this.populateProjects();
  }

  populateProjects() {
    this.projects = new Array<Project>;

    for (const i in this.projectsJSON) {
      let projLanguages = new Array<Language>;

      for (const j in this.projectsJSON[i].languages) {
        let tempLang: Language = {
          name: this.projectsJSON[i].languages[j].langName,
          color: this.projectsJSON[i].languages[j].color,
          bgColor: this.projectsJSON[i].languages[j].bgColor,
        };
        projLanguages.push(tempLang);

        if (this.langShouldCreateFilter(tempLang)) {
          const colorWithoutTransparency = tempLang.bgColor.slice(0, tempLang.bgColor.length - 3);
          tempLang.hoverBgColor = "hover:"+colorWithoutTransparency+"/50";
          this.languages.push(tempLang);
        }
      }

      this.projects.push({
        name: this.projectsJSON[i].name,
        image: this.projectsJSON[i].image,
        url: this.projectsJSON[i].url,
        languages: projLanguages
      });
    }
  }

  onClick(langName: string) {
    let notActive = true;
    this.activeFilters.forEach((filter, index) => {
      if (langName == filter.name) {
        notActive = false;
        this.removeFilter(langName, index);
      }
    });
    if (notActive)
      this.applyFilter(langName);
    this.filterProjects();
  }

  removeFilter(langName: string, index: number) {
    this.languages.forEach(lang => {
      if (lang.name == langName)
        lang.outlineColor = undefined;
    });
    this.activeFilters.splice(index, 1);
  }

  applyFilter(langName: string) {
    this.languages.forEach(lang => {
      if (lang.name == langName) {
        lang.outlineColor = "outline" + lang.bgColor.slice(2, lang.bgColor.length - 3);
        this.activeFilters.push(lang);
      }
    });
  }

  clearFilters() {
    this.languages.forEach(lang => lang.outlineColor = undefined);
    this.activeFilters = new Array<Language>;
    this.filterProjects();
  }

  filterProjects() {
    this.populateProjects();
    if (this.activeFilters.length <= 0)
      return;

    for (let prjIndex = 0; prjIndex < this.projects.length; prjIndex++) {
      let shouldRemove = false;
      for (let filterIndex = 0; filterIndex < this.activeFilters.length; filterIndex++) {
        let filterNotPresent = true;
        for (let langIndex = 0; langIndex < this.projects[prjIndex].languages.length; langIndex++) {
          if (this.projects[prjIndex].languages[langIndex].name == this.activeFilters[filterIndex].name) {
            filterNotPresent = false;
            break;
          }
        }
        if (filterNotPresent) {
          shouldRemove = true;
          break;
        }
      }
      if (shouldRemove) {
        this.projects.splice(prjIndex, 1);
        prjIndex--;
      }
    }
  }

  langShouldCreateFilter(lang: Language): boolean {
    for (let i in this.languages)
      if (lang.name == this.languages[i].name)
        return false;
    return true;
  }

  get projectsHeader() {
    return ProjectCardComponent._projectsHeader;
  }

  get emptyQuery() {
    return ProjectCardComponent._emptyQuery;
  }
}

interface Project {
  name: string,
  image: string,
  url: string,
  languages: Array<Language>
}

interface Language {
  name: string,
  color: string,
  bgColor: string,
  hoverBgColor?: string,
  outlineColor?: string
}
