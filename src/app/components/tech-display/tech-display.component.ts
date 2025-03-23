import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import Languages from 'src/app/models/languages.model';
import Tag from 'src/app/models/tag.model';
import { LocalizationService } from 'src/app/services/localization.service';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-tech-display',
  templateUrl: './tech-display.component.html',
  styleUrls: ['./tech-display.component.css'],
  animations: [
    trigger('changed', [
      state('entering', style({
        opacity: 0,
        transform: 'translateY(-20%)'
      })),
      state('waiting', style({
        opacity: 1,
        transform: 'translateY(0%)'
      })),
      state('leaving', style({
        opacity: 0,
        transform: 'translateY(15%)'
      })),
      transition('entering => waiting', animate('125ms')),
      transition('waiting => leaving', animate('125ms')),
      transition('leaving => entering', animate('0ms'))
    ])
  ]
})
export class TechDisplayComponent implements OnInit {
  private readonly TEXT_CHANGE_TIME = 1250;
  public readonly LANGUAGES = Languages;

  public animationState: string = "entering";
  public feature: Tag = this.projectService.filters[0];

  constructor(public localizationService: LocalizationService, public projectService: ProjectsService) { }

  async ngOnInit() {
    await this.changeText();
  }

  async changeText() {
    let tagIndex = 0;
    while (true) {
      this.animationState = "entering"
      await new Promise((resolve) => setTimeout(resolve, 125));
      
      this.animationState = "waiting"
      this.feature = this.projectService.filters[tagIndex];
      tagIndex = (tagIndex + 1) % this.projectService.filters.length;
      await new Promise((resolve) => setTimeout(resolve, this.TEXT_CHANGE_TIME));
      
      this.animationState = "leaving"
      await new Promise((resolve) => setTimeout(resolve, 125));
    }
  }
}
