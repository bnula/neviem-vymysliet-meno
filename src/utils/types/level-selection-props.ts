import { CatsExplanation } from "@/utils/types/cats-explanation";

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

export type Task = {
    title: string;
    text: string;
}