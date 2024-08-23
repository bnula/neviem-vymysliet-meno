import { CatsExplanation } from "@/app/utils/types/cats-explanation";
import { Task } from "./task";

export interface LevelSectionProps {
    title: string;
    objectives: string[];
    tasks: Task[];
    rewards: string[];
    links: LevelLink[];
    cats?: CatsExplanation;
}

export type LevelLink = {
    url: string;
    text: string;
}