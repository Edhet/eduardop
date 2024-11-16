import { LocalizationService } from '../../services/localization.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills-and-experience',
  templateUrl: './skills-and-experience.component.html',
  styleUrls: ['./skills-and-experience.component.css']
})
export class SkillsAndExperienceComponent {

  constructor(public localizationService: LocalizationService) { }
}
