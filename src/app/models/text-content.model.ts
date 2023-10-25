import Languages from "./languages.model";

export default interface TextContent {
    language: Languages,
    headerContent: HeaderContent,
    sectionsContent: SectionContent[],
    footerContent: FooterContent,
    emptyQueryText: string
}

interface HeaderContent {
    firstName: string,
    surname: string
    email: string,
    contactText: string
}

interface SectionContent {
    sectionHeader: string,
    sectionBody?: string
}

interface FooterContent {
    date: string,
    footerText: string
}