import Tag from "./tag.model";

export default interface Project {
    name: string,
    descriptions: string[],
    image: string,
    url: string,
    tags: string[]
}