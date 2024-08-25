"use client";

import { addVocabularyWord, fetchVocabulary } from "@/app/data/crud-operations";
import { VocabularyEntry } from "@/app/utils/types/vocabulary-entry";
import { useState, useEffect } from "react";

export default function Page() {
    const [words, setWords] = useState<VocabularyEntry[]>([]);
    const [english, setEnglish] = useState<string>("");
    const [czech, setCzech] = useState<string>("");

    useEffect(() => {
        const getWords = async () => {
        const fetchedWords = await fetchVocabulary();
        setWords(fetchedWords);
        };

        getWords();
    }, []); // Empty dependency array to prevent infinite loop

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault(); // Prevents form from reloading the page

        if (!english || !czech) {
        alert("Please fill in both fields.");
        return;
        }

        const newWord: VocabularyEntry = {
        english,
        czech,
        };

        try {
        await addVocabularyWord(newWord);
        setWords((prevWords) => [...prevWords, newWord]); // Add the new word to the state
        setEnglish(""); // Clear the input fields
        setCzech("");
        } catch (error) {
        console.error("Failed to add word:", error);
        }
    };

    const handleOpenDeepL = () => {
        const deeplUrl = `https://www.deepl.com/translator#en/cs/${english}`;
        window.open(deeplUrl, "_blank"); // Opens DeepL in a new tab with the English word prefilled
    };

    return (
        <div className="max-w-2xl mx-auto">
        <form className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 pb-6" onSubmit={handleSave}>
            <div className="col-span-3">
            <label htmlFor="english" className="block text-sm font-medium leading-6 text-white">
                English
            </label>
            <div className="mt-2">
                <input
                id="english"
                name="english"
                type="text"
                value={english}
                onChange={(e) => setEnglish(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                />
            </div>
            </div>

            <div className="col-span-3">
            <label htmlFor="czech" className="block text-sm font-medium leading-6 text-white">
                Czech
            </label>
            <div className="mt-2">
                <input
                id="czech"
                name="czech"
                type="text"
                value={czech}
                onChange={(e) => setCzech(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                />
            </div>
            </div>

            <div className="col-span-6 flex justify-between">
            <button
                type="submit"
                className="w-1/2 rounded-md bg-teal-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 mr-2"
            >
                Save
            </button>
            <button
                type="button" // Prevents form submission
                onClick={handleOpenDeepL}
                className="w-1/2 rounded-md bg-white px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
            >
                Translate in DeepL
            </button>
            </div>
        </form>

        <div className="grid-cols-1 mt-6">
            <table className="table-auto w-full text-left border-collapse border border-slate-500">
            <thead>
                <tr>
                <th className="w-1/2 border border-slate-600 px-4 py-2">English</th>
                <th className="w-1/2 border border-slate-600 px-4 py-2">Czech</th>
                </tr>
            </thead>
            <tbody>
                {words?.map((item, index) => (
                <tr key={index}>
                    <td className="border border-slate-700 px-4 py-2">{item.english}</td>
                    <td className="border border-slate-700 px-4 py-2">{item.czech}</td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
        </div>
    );
}
