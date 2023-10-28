import { Injectable } from '@angular/core';
import { TextContent } from '../models/text-content.model';
import Languages from '../models/languages.model';
import textData from "../../assets/json/langstext.json";
import eventsData from "../../assets/json/events.json";
import { EventList } from '../models/event.model';

@Injectable({
  providedIn: 'root'
})
export class LocalizationService {
  private readonly localizedTextContents: TextContent[];
  private readonly events: EventList[];

  private selectedEventList: EventList;
  private selectedLanguage: Languages = Languages.ENGLISH;
  private selectedLanguageTextContent: TextContent;

  constructor() {
    this.events = eventsData as EventList[];
    this.localizedTextContents = textData as TextContent[];
    this.selectedLanguageTextContent = this.localizedTextContents[0];
    this.selectedEventList = this.events[0];
  }

  public changeLanguage(language: Languages) {
    for (let textContent of this.localizedTextContents) {
      if (textContent.language == language) {
        this.selectedLanguageTextContent = textContent;
        this.selectedLanguage = language;

        document.documentElement.setAttribute("lang", language);
        localStorage.setItem("lang", language);
        
        this.changeEventList(language);
        return;
      }
    }
    throw new Error("Text content for specified language not found");
  }

  private changeEventList(language: Languages) {
    for (let eventList of this.events) {
      if (eventList.language == language) {
        this.selectedEventList = eventList;
        return;
      }
    }
    throw new Error("Event list for specified language not found");
  }

  get eventList() {
    return this.selectedEventList.events;
  }

  get currentLanguage() {
    return this.selectedLanguage;
  }

  get headerContent() {
    return this.selectedLanguageTextContent.headerContent;
  }

  get aboutSectionContent() {
    return this.selectedLanguageTextContent.sectionsContent[0];
  }

  get introductionContent() {
    return this.selectedLanguageTextContent.sectionsContent[1];
  }

  get skillsSectionContent() {
    return this.selectedLanguageTextContent.sectionsContent[2];
  }

  get projectHeader() {
    return this.selectedLanguageTextContent.sectionsContent[3].sectionHeader;
  }

  get footerContent() {
    return this.selectedLanguageTextContent.footerContent;
  }

  get emptyQueryText() {
    return this.selectedLanguageTextContent.emptyQueryText;
  }
}
