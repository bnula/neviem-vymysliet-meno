"use client";

import { useState } from "react";
import { questions } from "@/app/utils/quiz-questions";

export default function Page() {
    const [answers, setAnswers] = useState<number[]>(Array(questions.length).fill(-1));
    const [score, setScore] = useState<number | null>(null);

    const handleOptionChange = (questionIndex: number, optionIndex: number) => {
        const newAnswers = [...answers];
        newAnswers[questionIndex] = optionIndex;
        setAnswers(newAnswers);
    };

    const handleSubmit = () => {
        const newScore = answers.reduce((acc, answer, index) => {
            return acc + (answer === questions[index].answer ? 1 : 0);
        }, 0);
        setScore(newScore);
    };

    return (
        <div className="max-w-4xl mx-auto p-8 bg-slate-300 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold text-teal-600 mb-4">SDLC/STLC Quiz</h1>
            <p className="text-gray-700 mb-6">
                Malý kvizíček, pointa není, že to musíš vědět z hlavy, klidně si pogoogli, když tak :D 
                (a 80% je 12/15 😅)
            </p>

            <form className="space-y-8">
                {questions.map((q, qIndex) => (
                    <div key={qIndex} className="p-4 bg-slate-400 rounded-lg shadow-sm">
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">{q.question}</h3>
                        <div className="space-y-2">
                            {q.options.map((option, oIndex) => (
                                <label key={oIndex} className="block text-gray-700">
                                    <input
                                        type="radio"
                                        name={`question-${qIndex}`}
                                        value={oIndex}
                                        checked={answers[qIndex] === oIndex}
                                        onChange={() => handleOptionChange(qIndex, oIndex)}
                                        className="mr-2 text-teal-600 focus:ring-teal-500"
                                    />
                                    {option}
                                </label>
                            ))}
                        </div>
                    </div>
                ))}
            </form>

            <div className="mt-8 text-center">
                <button
                    onClick={handleSubmit}
                    className="px-6 py-3 bg-teal-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-teal-500 transition-colors"
                >
                    Submit
                </button>
                {score !== null && (
                    <div className="mt-6">
                        <h2 className="text-2xl font-bold text-gray-800">
                            Your score: {score} / {questions.length}
                        </h2>
                    </div>
                )}
            </div>
        </div>
    );
}
