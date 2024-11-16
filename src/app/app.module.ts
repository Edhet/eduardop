import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { HeroComponent } from './components/header/hero.component';
import { FooterComponent } from './components/footer/footer.component';
import { SkillsAndExperienceComponent } from './components/about/skills-and-experience.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { EventTimelineComponent } from './components/event-timeline/event-timeline.component';
import { TechDisplayComponent } from './components/tech-display/tech-display.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    HeroComponent,
    FooterComponent,
    SkillsAndExperienceComponent,
    ProjectCardComponent,
    EventTimelineComponent,
    TechDisplayComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
