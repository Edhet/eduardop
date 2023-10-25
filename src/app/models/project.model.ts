import Tag from "./tag.model";

export default interface Project {
    name: string,
    image: string,
    url: string,
    tags: Tag[]
}