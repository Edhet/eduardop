import { Injectable, OnInit } from '@angular/core';
import TextContent from '../models/text-content.model';
import Languages from '../models/languages.model';
import textData from "../../assets/json/langstext.json";

@Injectable({
  providedIn: 'root'
})
export class LocalizationService {
  private selectedLanguage: Languages = Languages.ENGLISH;
  private selectedLanguageTextContent: TextContent;

  private readonly localizedTextContents: TextContent[];

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

  get sectionContent() {
    return this.selectedLanguageTextContent.sectionsContent;
  }

  get footerContent() {
    return this.selectedLanguageTextContent.footerContent;
  }

  get emptyQueryText() {
    return this.selectedLanguageTextContent.emptyQueryText;
  }
}
