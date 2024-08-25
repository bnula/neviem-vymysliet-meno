"use client";

import { fetchProgress } from "@/app/data/crud-operations";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";

export default function GetProgress() {
    const { data: session, status } = useSession(); // Use status to track session state
    const [progress, setProgress] = useState({
        points: 0,
        levelsCompleted: 0,
        maxLevel: 0
    });
    const [loading, setLoading] = useState(true); // Track loading state

    useEffect(() => {
        const getProgressData = async () => {
            try {
                    const userId = "410544b2-4001-4271-9855-fec4b6a6442a"
                    const progressData = await fetchProgress(userId);
                    setProgress(progressData);
                } catch (error) {
                    console.error("Failed to fetch progress:", error);
                }
                    setLoading(false); // Set loading to false after fetching
        };

        getProgressData();
    }, [status, session]);

    if (loading) {
        return <p className="text-white text-center text-2xl">Loading...</p>;
    }

    return (
        <div className="min-h-screen bg-gradient-to-r from-teal-400 to-blue-500 flex flex-col justify-center items-center text-center text-white">
        <div className="bg-white rounded-lg shadow-lg p-10 max-w-xl mx-auto text-black">
            <h1 className="text-4xl font-bold mb-6 text-teal-600">Ahoj Makinka ❤️</h1>
            <p className="text-xl mb-4">
            You have <strong className="text-teal-500">{progress.points}</strong> points.
            </p>
            <p className="text-xl mb-8">
            You have completed <strong className="text-teal-500">{progress.levelsCompleted}</strong> tasks out of <strong className="text-teal-500">{progress.maxLevel}</strong>.
            </p>
        </div>
        </div>
    );
}
