import {Component, OnInit} from '@angular/core';
import { LocalizationService } from 'src/app/services/localization.service';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent {

  constructor(public localizationService: LocalizationService, public projectsService: ProjectsService) { }
}
