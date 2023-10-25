import Language from "./language.model";

export default interface Project {
    name: string,
    image: string,
    url: string,
    languages: Language[]
}