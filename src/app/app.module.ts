import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { FooterComponent } from './components/footer/footer.component';
import { SkillsAndExperienceComponent } from './components/skills-and-experience/skills-and-experience.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { TechDisplayComponent } from './components/tech-display/tech-display.component';
import { HeroComponent } from './components/hero/hero.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    HeroComponent,
    FooterComponent,
    SkillsAndExperienceComponent,
    ProjectCardComponent,
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
