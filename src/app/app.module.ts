import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { EventTimelineComponent } from './components/event-timeline/event-timeline.component';
import { HeaderDisplayComponent } from './components/tech-feature/tech-feature.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ProjectCardComponent,
    EventTimelineComponent,
    HeaderDisplayComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
