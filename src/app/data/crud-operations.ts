"use server";

import { sql } from "@vercel/postgres";
import { Task } from "../utils/types/task";
import { Progress } from "../utils/types/progress";
import { VocabularyEntry } from "../utils/types/vocabulary-entry";
import { Position } from "../utils/types/position";

export async function fetchTasks(level: number) {
    try {
        const data = await sql<Task>`SELECT * FROM tasks WHERE level = ${level}`

        return data.rows;
    } catch (error) {
        console.error("Database Error:", error);
        throw new Error("Failed to fetch task data.");
    }
}

export async function updateTask(task: Task) {
    try {
        await sql`
            UPDATE tasks
            SET completed = ${task.completed}
            WHERE level = ${task.level}
            AND text = ${task.text}
            AND title = ${task.title}
        `;
    } catch (error) {
        console.error("Database Error:", error);
        throw new Error("Failed to update task.");
    }
}

export async function fetchProgress(userId: string) {
    try {
        const data = await sql<Progress>`
        SELECT
            user_id as "userId",
            levels_completed as "levelsCompleted",
            max_level as "maxLevel",
            points,
            user_id as "userId"
        FROM progress WHERE user_id = ${userId}`
        const progDb = data.rows[0]
        return progDb;
    } catch (error) {
        console.error("Database Error:", error);
        throw new Error("Failed to fetch progress data.");
    }
}

export async function updateProgress(progress: Progress) {
    try {
        await sql`
            UPDATE progress
            SET levels_completed = ${progress.levelsCompleted}, points = ${progress.points}
            WHERE user_id = ${progress.userId}
        `;
    } catch (error) {
        console.error("Database Error:", error);
        throw new Error("Failed to update progress data.");
    }
}

export async function fetchVocabulary() {
    try {
        const vocab = await sql<VocabularyEntry>`SELECT * FROM vocabulary`;
        return vocab.rows;
    } catch (error) {
        console.error("Database Error:", error);
        throw new Error("Failed to fetch vocabulary data.");
    }
}

export async function addVocabularyWord(word: VocabularyEntry) {
    try {
        await sql`INSERT INTO vocabulary (czech, english) VALUES (${word.czech}, ${word.english})`
    } catch (error) {
        console.error("Database Error:", error);
        throw new Error("Failed to add vocabulary entry.");
    }
}

export async function fetchPositions() {
    try {
        const positions = (await sql`SELECT * FROM positions INNER JOIN links ON positions.link_id = links.id`).rows;
        return positions;
    } catch (error) {
        console.error("Database Error:", error);
        throw new Error("Failed to fetch positions");
    }
}

export async function addPosition(position: Position) {
    try {
        await sql`INSERT INTO links (text, url) VALLUES (${position.link.text}, ${position.link.url})`;
        const link = (await sql`SELECT * FROM links WHERE text = ${position.link.text} AND url = ${position.link.url}`).rows[0];
        await sql`INSERT INTO positions (description, link_id) VALUES (${position.description}, ${link.id})`;
    } catch (error) {
        console.error("Database Error", error);
        throw new Error("Failed to add position");
    }
}