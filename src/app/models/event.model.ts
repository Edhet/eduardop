import Languages from "./languages.model"

export interface EventList {
    language: Languages
    events: Event[]
}

export interface Event {
    header: string
    description: string
    date: string
}