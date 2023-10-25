import { Injectable } from '@angular/core';
import Project from '../models/project.model';
import projectData from "../../assets/json/projects.json";
import Tag from '../models/tag.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private readonly projects: Project[];
  private readonly tagList: Tag[] = [];

  private filteredProjects: Project[];
  private activatedFilters: Tag[] = [];

  constructor() {
    this.projects = projectData as Project[];
    this.filteredProjects = this.projectListCopy();
    this.getTagList();
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

  public filterIsActive(filter: Tag) {
    return this.tagIsIncluded(filter, this.activatedFilters);
  }

  private filter() {
    this.filteredProjects = this.projectListCopy();

    for (let i = 0; i < this.filteredProjects.length; i++) {
      let hasFilter = true;
      this.activatedFilters.forEach(f => {
        if (!this.tagIsIncluded(f, this.filteredProjects[i].tags)) {
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

  private getTagList() {
    this.projects.forEach(p => {
      p.tags.forEach(t => {
        if (!this.tagIsIncluded(t, this.tagList)) this.tagList.push(t);
      });
    });
  }

  private tagIsIncluded(tag: Tag, list: Tag[]) {  
    for (let t of list) {
      if (tag.tagName == t.tagName)
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
