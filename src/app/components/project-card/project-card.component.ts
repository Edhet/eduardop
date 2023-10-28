import { Component, Input } from '@angular/core';
import Project from 'src/app/models/project.model';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent {
  @Input() projectInfo?: Project;

  constructor(public projectsService: ProjectsService) { }
}
