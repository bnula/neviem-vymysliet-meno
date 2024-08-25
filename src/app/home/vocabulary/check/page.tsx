"use client";

import { fetchVocabulary } from "@/app/data/crud-operations";
import { VocabularyEntry } from "@/app/utils/types/vocabulary-entry";
import { useEffect, useState } from "react";

export default function Page() {
    const [words, setWords] = useState<VocabularyEntry[]>([]);
    const [currentWordIndex, setCurrentWordIndex] = useState<number>(0);
    const [flipped, setFlipped] = useState<boolean>(false);

    useEffect(() => {
        const getWords = async () => {
        const fetchedWords = await fetchVocabulary();
        setWords(fetchedWords);
        setCurrentWordIndex(Math.floor(Math.random() * fetchedWords.length)); // Set an initial random word
        };

        getWords();
    }, []);

    const handleFlip = () => {
        setFlipped(!flipped); // Toggle card flip state
    };

    const handleNewWord = () => {
        // Ensure that the next word is different from the current word
        let newIndex;
        do {
        newIndex = Math.floor(Math.random() * words.length);
        } while (newIndex === currentWordIndex);

        setCurrentWordIndex(newIndex);
        setFlipped(false); // Reset flip state when new word is chosen
    };

    if (words.length === 0) {
        return <div className="text-center text-white">Loading words...</div>;
    }

    const currentWord = words[currentWordIndex];

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800">
        <div
            className={`relative w-80 h-48 mb-8 bg-white text-black rounded-lg shadow-lg transform transition-transform duration-500 ${
            flipped ? "rotate-y-180" : ""
            }`}
            onClick={handleFlip}
        >
            <div className="absolute inset-0 flex items-center justify-center backface-hidden p-4">
                <h2 className="text-xl font-bold">
                    {flipped ? currentWord.czech : currentWord.english}
                </h2>
            </div>
        </div>

        <button
            onClick={handleNewWord}
            className="rounded-md bg-teal-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
        >
            Show New Word
        </button>
        </div>
    );
}
