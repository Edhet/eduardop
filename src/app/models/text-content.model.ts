import Languages from "./languages.model";

export interface TextContent {
    language: Languages,
    headerContent: HeaderContent,
    sectionsContent: SectionContent[],
    footerContent: FooterContent,
    emptyQueryText: string
}

export interface HeaderContent {
    firstName: string,
    surname: string
    email: string,
    contactText: string
}

export interface SectionContent {
    sectionHeader: string,
    sectionBody?: string
}

export interface FooterContent {
    date: string,
    footerText: string
}