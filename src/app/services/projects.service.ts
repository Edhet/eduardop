import { Injectable } from '@angular/core';
import projectData from "../../assets/json/projects.json";
import tagsData from "../../assets/json/tags.json";
import projectType from "../../assets/json/project-type.json";
import Project from '../models/project.model';
import Tag from '../models/tag.model';
import ProjectType from '../models/project-type.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private readonly projects: Project[];
  private readonly tagList: Tag[];
  private readonly projectType: ProjectType[];

  private filteredProjects: Project[];
  private activatedFilters: Tag[];

  constructor() {
    this.projects = projectData as Project[];
    this.tagList = tagsData as Tag[];
    this.projectType = projectType as ProjectType[];

    this.filteredProjects = this.projectListCopy();
    this.activatedFilters = [];
  }

  public getTagStyles(tag: Tag) {
    return `${tag.color} ${tag.bgColor} ${tag.outlineColor} ${tag.hoverBgColor} ${tag.borderColor}`;
  }

  public changeFilter(filter: Tag) {
    if (this.activatedFilters.includes(filter))
      this.activatedFilters.splice(this.activatedFilters.indexOf(filter), 1);
    else
      this.activatedFilters.push(filter);
    this.filter();
  }

  public clearFilters() {
    this.activatedFilters = [];
    this.filteredProjects = this.projectListCopy();
  }

  public filterIsActive(filterName: string) {
    return this.tagIsIncluded(filterName, this.activatedFilters);
  }

  public getTagListFromNames(tagNames: string[]) {
    return this.tagList.filter(tag => tagNames.includes(tag.tagName));
  }

  public getProjectTypeIcon(type: string) {
    let icon = `/assets/svg/type/${this.projectType.filter(pt => pt.type == type)[0].iconTag ?? "help-outline.svg"}`;
    return icon;
  }

  private filter() {
    this.filteredProjects = this.projectListCopy();

    for (let i = 0; i < this.filteredProjects.length; i++) {
      let hasFilter = true;
      this.activatedFilters.forEach(f => {
        if (!this.tagIsIncluded(f.tagName, this.getTagListFromNames(this.filteredProjects[i].tags))) {
          hasFilter = false;
          return;
        }
      });

      if (!hasFilter) {
        this.filteredProjects.splice(i, 1);
        i--;
      }
    }
  }

  private tagIsIncluded(tagName: String, list: Tag[]) {
    for (let t of list) {
      if (tagName == t.tagName)
        return true;
    }
    return false;
  }

  private projectListCopy() {
    return JSON.parse(JSON.stringify(this.projects));
  }

  get projectList() {
    return this.filteredProjects;
  }

  get filters() {
    return this.tagList;
  }

  get activeFilters() {
    return this.activatedFilters;
  }
}
