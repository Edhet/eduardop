import { Component, Input, OnInit } from '@angular/core';
import Project from 'src/app/models/project.model';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements OnInit {
  @Input() projectInfo?: Project;
  typeIconSrc?: string;

  constructor(public projectsService: ProjectsService) { }

  ngOnInit() {
    this.typeIconSrc = this.projectsService.getProjectTypeIcon(this.projectInfo!.type);
  }
}
