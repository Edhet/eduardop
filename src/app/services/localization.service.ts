import { Injectable, OnInit } from '@angular/core';
import TextContent from '../models/text-content.model';
import Languages from '../models/languages.model';
import textData from "../../assets/json/langstext.json";

@Injectable({
  providedIn: 'root'
})
export class LocalizationService {
  private readonly localizedTextContents: TextContent[];

  private selectedLanguage: Languages = Languages.ENGLISH;
  private selectedLanguageTextContent: TextContent;

  constructor() {
    this.localizedTextContents = textData as TextContent[];
    this.selectedLanguageTextContent = this.localizedTextContents[0];
  }

  public changeLanguage(language: Languages) {
      for (let textContent of this.localizedTextContents) {
      if (textContent.language == language) {
        this.selectedLanguageTextContent = textContent;
        this.selectedLanguage = language;
        document.documentElement.setAttribute("lang", language);
        localStorage.setItem("lang", language);
        return;
      }
    }
    throw new Error("Text content for specified language not found");
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

  get skillsSectionContent() {
    return this.selectedLanguageTextContent.sectionsContent[1];
  }

  get projectHeader() {
    return this.selectedLanguageTextContent.sectionsContent[2].sectionHeader;
  }

  get footerContent() {
    return this.selectedLanguageTextContent.footerContent;
  }

  get emptyQueryText() {
    return this.selectedLanguageTextContent.emptyQueryText;
  }
}
