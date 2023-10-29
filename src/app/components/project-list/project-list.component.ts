import {Component, OnInit} from '@angular/core';
import { LocalizationService } from 'src/app/services/localization.service';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent {

  constructor(public localizationService: LocalizationService, public projectsService: ProjectsService) { }
}
