"use client";

import { fetchProgress, fetchTasks, updateProgress, updateTask } from "@/app/data/crud-operations";
import levelTexts from "@/app/utils/level-texts";
import { Progress } from "@/app/utils/types/progress";
import { Task } from "@/app/utils/types/task";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

interface TaskElemProps {
    task: Task;
    onTaskUpdate: (updatedTask: Task) => void;
}

const TaskElem: React.FC<TaskElemProps> = ({ task, onTaskUpdate }) => {
    const handleCheckboxChange = async () => {
        try {
            await onTaskUpdate(task);
        } catch (error) {
            console.error("Failed to update task:", error);
        }
    };

    return (
        <li className="px-4 py-2 bg-white rounded-lg shadow-md mb-4 flex justify-between items-center">
            <span className={`font-semibold ${task.completed === "true" ? "line-through text-gray-400" : ""}`}>
                {task.title}: {task.text}
            </span>
            <input
                type="checkbox"
                className="form-checkbox h-6 w-6 text-teal-600"
                checked={task.completed === "true"}
                disabled={task.completed === "true"}
                onChange={handleCheckboxChange}
            />
        </li>
    );
};

export default function Page({ params }: { params: { id: string } }) {
    const id = params.id;
    const levelText = levelTexts.filter(l => l.title.includes(id))[0];

    const [tasks, setTasks] = useState<Task[]>();
    let [progress, setProgress] = useState<Progress>();

    useEffect(() => {
        const getTasks = async () => {
            const tasks = await fetchTasks(Number(id));
            setTasks(tasks);
        };

        const getProgress = async () => {
            const progress = await fetchProgress("410544b2-4001-4271-9855-fec4b6a6442a");
            setProgress(progress);
        };

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
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-teal-400 to-blue-500 flex flex-col items-center justify-center text-white">
            <div className="bg-white text-black rounded-lg shadow-lg p-8 max-w-3xl w-full text-center">
                <h1 className="font-bold text-4xl text-teal-600 mb-6">{levelText.title}</h1>
                
                <div className="text-left">
                    <p className="text-xl underline mb-4">Objectives:</p>
                    <ul className="list-disc list-inside mb-6">
                        {levelText.objectives.map((item, index) => (
                            <li key={index} className="mb-2 text-lg text-gray-700">{item}</li>
                        ))}
                    </ul>
                    
                    <p className="text-xl underline mb-4">Tasks:</p>
                    <ol className="list-decimal list-inside mb-6">
                        {tasks?.map((item, index) => (
                            <TaskElem key={index} task={item} onTaskUpdate={handleTaskUpdate} />
                        ))}
                    </ol>

                    <p className="text-xl underline mb-4">Rewards:</p>
                    <ul className="list-disc list-inside mb-6">
                        {levelText.rewards.map((item, index) => (
                            <li key={index} className="mb-2 text-lg text-gray-700">{item}</li>
                        ))}
                    </ul>
                    
                    <p className="text-xl underline mb-4">Useful Links:</p>
                    <ul className="list-disc list-inside">
                        {levelText.links.map((item, index) => (
                            <li key={index} className="mb-2 text-lg text-teal-600 underline">
                                <a href={item.url} target="_blank">{item.text}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
