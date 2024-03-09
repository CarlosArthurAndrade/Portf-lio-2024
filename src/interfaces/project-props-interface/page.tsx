import { StaticImageData } from "next/image";

export default interface ProjectProp {
    title: string,
    image: StaticImageData,
    description: string,
    tools: StaticImageData[]
}