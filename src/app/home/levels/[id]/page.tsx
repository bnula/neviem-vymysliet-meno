"use client";

import { fetchProgress, fetchTasks, updateProgress, updateTask } from "@/app/data/crud-operations";
import levelTexts from "@/app/utils/level-texts";
import { Progress } from "@/app/utils/types/progress";
import { Task } from "@/app/utils/types/task";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

interface TaskElemProps {
    task: Task;
    onTaskUpdate: (updatedTask: Task) => void;
}

const TaskElem: React.FC<TaskElemProps> = ({ task, onTaskUpdate }) => {
    
    const handleCheckboxChange = async () => {
        try {
            await onTaskUpdate(task)
        } catch (error) {
            console.error("Failed to update task:", error);
        }
    }
    if (task.completed === "true") {
        return (
            <li className="px-3" key={task.title}><strong>{task.title}</strong>: {task.text} <input type="checkbox" className="size-5" checked={true} disabled/></li>
        )
    }
    else {
        return (
            <li className="px-3" key={task.title}><strong>{task.title}</strong>: {task.text} <input type="checkbox" className="size-5" onChange={handleCheckboxChange}/></li>
        )
    }
}

export default function Page({ params }: { params: {id: string} }) {
    const id = params.id;
    const levelText = levelTexts.filter(l => l.title.includes(id))[0];

    const [ tasks, setTasks ] = useState<Task[]>();
    let [ progress, setProgress ] = useState<Progress>();

    useEffect(() => {
        const getTasks = async () => {
            const tasks = await fetchTasks(Number(id));
            setTasks(tasks);
        }

        const getProgress = async () => {
            const progress = await fetchProgress("410544b2-4001-4271-9855-fec4b6a6442a");
            setProgress(progress);
        }

        getTasks();
        getProgress();
    }, []);

    const handleTaskUpdate = async (updatedTask: Task) => {
        updatedTask.completed = "true";
        await updateTask(updatedTask);
        progress!.points += updatedTask.points;
        progress!.levelsCompleted++;
        await updateProgress(progress!);
        redirect(`/home/levels/${updatedTask.level}`);
    }

    return (
        <div>
            <h1 className="font-bold text-3xl">{levelText.title}</h1>
            <p className="text-xl underline">Objectives:</p>
            <ul className="list-disc list-inside">
                {levelText.objectives.map((item, index) => (
                    <li className="px-3" key={index}>{item}</li>
                ))}
            </ul>
            <p><strong>Tasks:</strong></p>
            <ol className="list-decimal list-inside">
                {tasks?.map((item, index) => (
                    <TaskElem key={index} task={item} onTaskUpdate={handleTaskUpdate} />
                ))}
            </ol>
            <p><strong>Rewards:</strong></p>
            <ul className="list-disc list-inside">
                {levelText.rewards.map((item, index) => (
                    <li className="px-3" key={index}>{item}</li>
                ))}
            </ul>
            <ul className="list-disc list-inside">
                {levelText.links.map((item, index) => (
                    <li className="px-3" key={index}><a className="underline" href={item.url} target="_blank">{item.text}</a></li>
                ))}
            </ul>
        </div>
    )
}