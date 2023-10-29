import { Component } from '@angular/core';
import { LocalizationService } from 'src/app/services/localization.service';

@Component({
  selector: 'app-event-timeline',
  templateUrl: './event-timeline.component.html',
  styleUrls: ['./event-timeline.component.css']
})
export class EventTimelineComponent {

  constructor(public localizationService: LocalizationService) { }
}
