import { sql } from "@vercel/postgres";
import { Task } from "../utils/types/task";
import { Progress } from "../utils/types/progress";

export async function fetchTasks(level: number) {
    try {
        const data = await sql<Task>`SELECT * FROM tasks WHERE level = ${level}`

        return data.rows;
    } catch (error) {
        console.error("Database Error:", error);
        throw new Error("Failed to fetch task data.")
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
        throw new Error("Failed to fetch progress data.")
    }
}